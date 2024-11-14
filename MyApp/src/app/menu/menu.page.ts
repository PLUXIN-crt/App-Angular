import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  profesorNombre: string = '';
  asignatura: string = '';
  seccion: string = '';

  constructor(
    private http: HttpClient,
    private navCtrl: NavController,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.obtenerDatosProfesor();
  }

  obtenerDatosProfesor() {
    const username = localStorage.getItem('username');
    this.http.get<any[]>(`http://localhost:3000/users?username=${username}`).subscribe(users => {
      const user = users[0];
      if (user && user.role === 'profesor') {
        this.profesorNombre = user.username;
        this.seccion = user.section;
        this.http.get<any[]>(`http://localhost:3000/subjects`).subscribe(subjects => {
          const subject = subjects.find(s => s.id === user.id);
          if (subject) {
            this.asignatura = subject.name;
          }
        });
      }
    });
  }

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
            this.handleLogout();
          }
        }
      ]
    });

    await alert.present();
  }

  handleLogout() {
    console.log('Sesión cerrada correctamente');
    this.navCtrl.navigateRoot('/inicio');
  }
}