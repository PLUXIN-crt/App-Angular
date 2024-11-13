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

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit() {}

  handleQrCodeResult(result: string) {
    try {
      this.scanResult = result; // Almacena el resultado del escaneo
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