import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroAsistenciasPage } from './registro-asistencias.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroAsistenciasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroAsistenciasPageRoutingModule {}
