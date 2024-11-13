import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ZXingScannerModule } from '@zxing/ngx-scanner';

import { LectorQrPageRoutingModule } from './lector-qr-routing.module';
import { LectorQrPage } from './lector-qr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ZXingScannerModule,
    LectorQrPageRoutingModule
  ],
  declarations: [LectorQrPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LectorQrPageModule {}