import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LectorQrPageRoutingModule } from './lector-qr-routing.module';
import { LectorQrPage } from './lector-qr.page';
import { BarcodeScanningModalComponent } from './barcode-scanning-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LectorQrPageRoutingModule
  ],
  declarations: [LectorQrPage, BarcodeScanningModalComponent]
})
export class LectorQrPageModule { }