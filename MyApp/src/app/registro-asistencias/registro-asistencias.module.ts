import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroAsistenciasPageRoutingModule } from './registro-asistencias-routing.module';

import { RegistroAsistenciasPage } from './registro-asistencias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroAsistenciasPageRoutingModule
  ],
  declarations: [RegistroAsistenciasPage]
})
export class RegistroAsistenciasPageModule {}
