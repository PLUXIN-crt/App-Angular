import { Component } from '@angular/core';

@Component({
  selector: 'app-asistencias',
  templateUrl: './asistencias.page.html',
  styleUrls: ['./asistencias.page.scss'],
})
export class AsistenciasPage {
  registros = [
    {
      asignatura: 'Arquitectura',
      codigo: 'ASY4131',
      porcentajeAsistencia: 81.8,
      clasesAsistidas: 9,
      totalClases: 11,
      expandido: false,
      asistencias: [
        { fecha: new Date(2024, 7, 12), presente: true },
        { fecha: new Date(2024, 7, 13), presente: true },
      ],
    },
    {
      asignatura: 'Calidad De Software',
      codigo: 'CSY4111',
      porcentajeAsistencia: 77.8,
      clasesAsistidas: 7,
      totalClases: 9,
      expandido: false,
      asistencias: [
        { fecha: new Date(2024, 7, 14), presente: false },
        { fecha: new Date(2024, 7, 15), presente: true },
      ],
    },
    // Agrega más registros según necesites
  ];

  constructor() {}
}
