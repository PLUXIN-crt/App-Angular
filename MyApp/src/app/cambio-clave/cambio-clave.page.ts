import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

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

  constructor(
    private navCtrl: NavController,
    private alertController: AlertController,
    private http: HttpClient
  ) {}

  // Método para cambiar la contraseña
  async changePassword() {
    // Obtener el usuario actual desde el almacenamiento local
    const username = localStorage.getItem('username');

    // Validar la nueva contraseña y la confirmación
    if (this.newPassword !== this.confirmPassword) {
      this.errorMessage = 'La nueva contraseña y la confirmación no coinciden.';
      return;
    }

    // Validar la longitud de la nueva contraseña
    if (this.newPassword.length < 6) {
      this.errorMessage = 'La nueva contraseña debe tener al menos 6 caracteres.';
      return;
    }

    // Realizar la solicitud HTTP GET para obtener los datos del usuario
    this.http.get<any[]>('http://localhost:3000/users').subscribe(users => {
      const user = users.find(u => u.username === username);
      if (user) {
        // Verificar la contraseña actual
        if (user.password !== this.currentPassword) {
          this.errorMessage = 'La contraseña actual es incorrecta.';
          return;
        }

        // Actualizar la contraseña
        user.password = this.newPassword;
        this.http.put(`http://localhost:3000/users/${user.id}`, user).subscribe(() => {
          this.errorMessage = '';
          this.showSuccessAlert(); // Mostrar el pop-up de confirmación
        });
      } else {
        this.errorMessage = 'Usuario no encontrado.';
      }
    });
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