import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registro-asistencias',
  templateUrl: './registro-asistencias.page.html',
  styleUrls: ['./registro-asistencias.page.scss'],
})
export class RegistroAsistenciasPage {
  showQRImage: boolean = false; // Controla la visualización de la imagen

  constructor(private alertController: AlertController) {}

  async generateQR() {
    const alert = await this.alertController.create({
      header: 'Código QR Generado',
      message: 'Presiona "Cerrar" para ver el código QR.',
      buttons: [
        {
          text: 'Cerrar',
          handler: () => {
            this.showQR(); // Llama a la función para mostrar la imagen
          }
        }
      ],
      cssClass: 'custom-alert',
    });

    await alert.present();
  }

  showQR() {
    this.showQRImage = true; // Activa la visualización de la imagen
  }
}
