import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngresarSeccionPagePageRoutingModule } from './ingresar-seccion.page-routing.module';

import { IngresarSeccionPagePage } from './ingresar-seccion.page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IngresarSeccionPagePageRoutingModule
  ],
  declarations: [IngresarSeccionPagePage]
})
export class IngresarSeccionPagePageModule {}
