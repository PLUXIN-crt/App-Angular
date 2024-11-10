import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-menu-profesor',
  templateUrl: './menu-profesor.page.html',
  styleUrls: ['./menu-profesor.page.scss'],
})
export class MenuProfesorPage {
  constructor(private navCtrl: NavController, private alertController: AlertController) {}
  
  // Método para cerrar sesión con un pop-up de confirmación
  async logout() {
    const alert = await this.alertController.create({
      header: 'Cerrar Sesión',
      message: '¿Estás seguro de que deseas cerrar sesión?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cierre de sesión cancelado');
          }
        },
        {
          text: 'Cerrar Sesión',
          handler: () => {
            // Aquí realizas la lógica para cerrar la sesión
            this.handleLogout();
          }
        }
      ]
    });

    await alert.present();
  }

  // Método que maneja el cierre de sesión y redirige a la página de inicio de sesión
  handleLogout() {
    // Aquí puedes realizar cualquier lógica adicional para cerrar la sesión
    console.log('Sesión cerrada correctamente');
    
    // Redirigir a la página de inicio de sesión
    this.navCtrl.navigateRoot('/inicio'); // Ajusta la ruta según la configuración de tu aplicación
  }
}