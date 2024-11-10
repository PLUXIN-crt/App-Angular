import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cambio-clave',
  templateUrl: './cambio-clave.page.html',
  styleUrls: ['./cambio-clave.page.scss'],
})
export class CambioClavePage {
  currentPassword: string = '';
  newPassword: string = '';
  confirmPassword: string = '';
  errorMessage: string = '';

  // Credenciales de usuario, simulando obtenerlas desde un servicio
  private readonly validUsername: string = 'Usuario1';
  private validPassword: string = 'MiClav3'; // Aquí se guarda la contraseña actual

  constructor(private navCtrl: NavController, private alertController: AlertController) {}

  // Método para cambiar la contraseña
  async changePassword() {
    if (this.currentPassword !== this.validPassword) {
      this.errorMessage = 'La contraseña actual es incorrecta.';
      return;
    }

    if (this.newPassword !== this.confirmPassword) {
      this.errorMessage = 'La nueva contraseña y la confirmación no coinciden.';
      return;
    }

    if (this.newPassword.length < 6) {
      this.errorMessage = 'La nueva contraseña debe tener al menos 6 caracteres.';
      return;
    }

    // Actualizar la contraseña (simulado aquí)
    this.validPassword = this.newPassword;
    this.errorMessage = '';

    // Mostrar el pop-up de confirmación
    await this.showSuccessAlert();
  }

  // Método para mostrar el pop-up de éxito
  async showSuccessAlert() {
    const alert = await this.alertController.create({
      header: 'Cambio de Contraseña',
      message: 'Contraseña cambiada exitosamente',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            // Redirigir a la página de bienvenida o cualquier otra página
            this.navCtrl.navigateForward('/bienvenida');
          },
        },
      ],
    });

    await alert.present();
  }
}
