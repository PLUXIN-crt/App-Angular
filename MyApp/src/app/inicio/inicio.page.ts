import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(
    private navCtrl: NavController,
    private alertController: AlertController,
    private http: HttpClient // Inyecta HttpClient
  ) {}

  // Método para validar el inicio de sesión
  login() {
    this.http.get<any[]>('http://localhost:3000/users').subscribe(users => {
      const user = users.find(u => u.username === this.username && u.password === this.password);
      if (user) {
        this.errorMessage = ''; // Si las credenciales son correctas, eliminamos el mensaje de error
        console.log('Inicio de sesión exitoso');
        // Redirigir a otra página o realizar la acción deseada (ej. asistencias)
        this.navCtrl.navigateForward('/user');
      } else {
        this.errorMessage = 'Usuario o contraseña incorrectos'; // Mostramos el mensaje de error si no coinciden
      }
    });
  }

  // Función para mostrar la alerta al presionar el texto
  async enviarCorreo() {
    const alert = await this.alertController.create({
      header: 'Aviso',
      message: 'Se ha enviado un correo de recuperacion',
      buttons: ['OK']
    });
    await alert.present();
  }
}