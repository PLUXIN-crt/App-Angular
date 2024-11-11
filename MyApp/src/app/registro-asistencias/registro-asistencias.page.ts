import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-registro-asistencias',
  templateUrl: './registro-asistencias.page.html',
  styleUrls: ['./registro-asistencias.page.scss'],
})
export class RegistroAsistenciasPage {
  asignaturas: string[] = [
    'Matematica Aplicada 001-D',
    'Programacion mobile 003-A',
    'Estadistica 001-D',
    'Ingles Avanzado 004-A',
    'Etica 003-B',
    'Arquitectura 005-B',
    'Calidad de software 006-F'
  ];
  
  isQRModalOpen: boolean = false;
  selectedAsignatura: string = '';

  constructor(private modalController: ModalController) {}

  openQRModal(asignatura: string) {
    this.selectedAsignatura = asignatura;
    this.isQRModalOpen = true;
  }

  closeQRModal() {
    this.isQRModalOpen = false;
  }
}
