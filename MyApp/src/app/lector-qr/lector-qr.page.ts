import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lector-qr',
  templateUrl: './lector-qr.page.html',
  styleUrls: ['./lector-qr.page.scss'],
})
export class LectorQrPage implements OnInit {
  qrScanned: boolean = false;
  scanResult: string = ''; // Propiedad para almacenar el resultado del escaneo
  attendanceForm: FormGroup;
  message: string = ''; // Propiedad para almacenar el mensaje de registro

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.attendanceForm = this.fb.group({
      className: ['', Validators.required],
      subject: ['', Validators.required],
      date: [{ value: '', disabled: true }, Validators.required]
    });
  }

  ngOnInit() {}

  handleQrCodeResult(result: string) {
    try {
      const [subject, section] = result.split(' - ');
      const username = localStorage.getItem('username');
      const currentDate = new Date().toISOString().split('T')[0];

      this.http.get<any[]>(`http://localhost:3000/users?username=${username}`).subscribe(users => {
        const user = users[0];
        if (user && user.section === section) {
          this.http.get<any[]>(`http://localhost:3000/attendances?studentId=${user.id}&subject=${subject}&date=${currentDate}`).subscribe(existingAttendances => {
            if (existingAttendances.length > 0) {
              this.message = `Ya has registrado tu asistencia para la asignatura ${subject} hoy.`;
            } else {
              this.scanResult = result; // Almacena el resultado del escaneo
              this.qrScanned = true;

              // Registrar la asistencia
              const attendance = {
                studentId: user.id,
                subject: subject,
                section: section,
                date: currentDate,
                presente: true // Asegúrate de incluir esta propiedad
              };

              this.http.post('http://localhost:3000/attendances', attendance).subscribe(() => {
                this.message = 'Asistencia registrada correctamente';
              });
            }
          });
        } else {
          this.message = 'La sección escaneada no corresponde a su sección asignada.';
        }
      });
    } catch (error) {
      console.error('Error parsing QR code:', error);
      this.message = 'Código QR inválido';
    }
  }

  onSubmit() {
    if (!this.qrScanned) {
      alert('Debe escanear el código QR para registrar la asistencia');
      return;
    }
    // Código para registrar la asistencia
  }
}