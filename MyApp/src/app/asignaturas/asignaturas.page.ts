import { Component } from '@angular/core';

@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.page.html',
  styleUrls: ['./asignaturas.page.scss'],
})
export class AsignaturasPage {
  asignaturas = [
    { nombre: 'Matematica Aplicada 001-D', imagen: 'assets/source/bannertest.jpeg' },
    { nombre: 'Programacion mobile 003-A', imagen: 'assets/source/bannertest.jpeg' },
    { nombre: 'Estadistica 001-D', imagen: 'assets/source/bannertest.jpeg' },
    { nombre: 'Ingles Avanzado 004-A', imagen: 'assets/source/bannertest.jpeg' },
    { nombre: 'Etica 003-B', imagen: 'assets/source/bannertest.jpeg' },
    { nombre: 'Arquitectura 005-B', imagen: 'assets/source/bannertest.jpeg' },
    { nombre: 'Calidad de software 006-F', imagen: 'assets/source/bannertest.jpeg' },
  ];

  constructor() {}
}
