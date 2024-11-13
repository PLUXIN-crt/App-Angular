import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-asistencia',
  templateUrl: './registrar-asistencia.page.html',
  styleUrls: ['./registrar-asistencia.page.scss'],
})
export class RegistrarAsistenciaPage {
  attendanceForm: FormGroup;
  qrScanned: boolean = false;

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

  handleQrCodeResult(result: string) {
    try {
      const qrData = JSON.parse(result);
      const currentDate = new Date().toISOString().split('T')[0];
      this.attendanceForm.patchValue({
        className: qrData.className,
        subject: qrData.subject,
        date: currentDate
      });
      this.qrScanned = true;
    } catch (error) {
      console.error('Error parsing QR code:', error);
      alert('Código QR inválido');
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