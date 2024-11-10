import { Component } from '@angular/core';

@Component({
  selector: 'app-asistencias',
  templateUrl: './asistencias.page.html',
  styleUrls: ['./asistencias.page.scss'],
})
export class AsistenciasPage {
  // Datos de las asignaturas con su estado de asistencia
  registros = [
    {
      asignatura: 'Matematica Aplicada 001-D',
      codigo: 'ASY4131',
      clasesAsistidas: 11,
      totalClases: 11,
      expandido: false,
      asistencias: [
        { fecha: new Date(2024, 7, 12), presente: true },
        { fecha: new Date(2024, 7, 13), presente: true },
      ],
    },
    {
      asignatura: 'Programacion mobile 003-A',
      codigo: 'CSY4111',
      clasesAsistidas: 7,
      totalClases: 9,
      expandido: false,
      asistencias: [
        { fecha: new Date(2024, 7, 14), presente: false },
        { fecha: new Date(2024, 7, 15), presente: true },
      ],
    },
    {
      asignatura: 'Estadistica 001-D',
      codigo: 'CSY4111',
      clasesAsistidas: 9,
      totalClases: 9,
      expandido: false,
      asistencias: [
        { fecha: new Date(2024, 7, 14), presente: false },
        { fecha: new Date(2024, 7, 15), presente: true },
      ],
    },
    {
      asignatura: 'Ingles Avanzado 004-A',
      codigo: 'CSY4111',
      clasesAsistidas: 11,
      totalClases: 13,
      expandido: false,
      asistencias: [
        { fecha: new Date(2024, 7, 14), presente: false },
        { fecha: new Date(2024, 7, 15), presente: true },
      ],
    },
    {
      asignatura: 'Etica 003-B',
      codigo: 'CSY4111',
      clasesAsistidas: 5,
      totalClases: 5,
      expandido: false,
      asistencias: [
        { fecha: new Date(2024, 7, 14), presente: false },
        { fecha: new Date(2024, 7, 15), presente: true },
      ],
    },
    {
      asignatura: 'Arquitectura 005-B',
      codigo: 'CSY4111',
      clasesAsistidas: 6,
      totalClases: 9,
      expandido: false,
      asistencias: [
        { fecha: new Date(2024, 7, 14), presente: false },
        { fecha: new Date(2024, 7, 15), presente: true },
      ],
    },
    {
      asignatura: 'Calidad de software 006-F',
      codigo: 'CSY4111',
      clasesAsistidas: 5,
      totalClases: 9,
      expandido: false,
      asistencias: [
        { fecha: new Date(2024, 7, 14), presente: false },
        { fecha: new Date(2024, 7, 15), presente: true },
      ],
    },
  ];

  constructor() {}

  // Método para calcular el porcentaje de asistencia
  calcularPorcentaje(registro: any): number {
    // Calcula el porcentaje de clases asistidas y redondea a un decimal, luego convierte a número
    return Number(((registro.clasesAsistidas / registro.totalClases) * 100).toFixed(1));
  }
}
