import { Component } from '@angular/core';

@Component({
  selector: 'app-registro-asistencias',
  templateUrl: './registro-asistencias.page.html',
  styleUrls: ['./registro-asistencias.page.scss'],
})
export class RegistroAsistenciasPage {
  texto: string = '';
  asignaturas: string[] = [
    'Matemáticas',
    'Programacion Movile',
    'Estadistica',
    'Ingles avanzado',
    'Etica', 
    'Arquitectura',
    'calidad de software'
  ];
  seccion: string = ''; // Nueva propiedad para la sección
  asignaturaSeleccionada: string = ''; // Nueva propiedad para la asignatura seleccionada

  actualizarQR() {
    this.texto = `${this.asignaturaSeleccionada} - ${this.seccion}`; // Concatenar asignatura y sección
  }
}