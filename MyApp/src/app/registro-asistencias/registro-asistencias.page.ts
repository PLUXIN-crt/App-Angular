import { Component } from '@angular/core';

@Component({
  selector: 'app-registro-asistencias',
  templateUrl: './registro-asistencias.page.html',
  styleUrls: ['./registro-asistencias.page.scss'],
})
export class RegistroAsistenciasPage {
  texto: string = ''; // Cambia a string
  asignaturas: string[] = [
    'Matemáticas',
    'Programacion Movile',
    'Estadistica',
    'Ingles avanzado',
    'Etica',
    'Arquitectura',
    'calidad de software'
  ];

  generarQR(asignatura: string) {
    this.texto = asignatura; // Asigna una cadena
  }
}