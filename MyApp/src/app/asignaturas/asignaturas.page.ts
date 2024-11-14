import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.page.html',
  styleUrls: ['./asignaturas.page.scss'],
})
export class AsignaturasPage implements OnInit {
  asignaturas: any[] = [
    { id: 1, nombre: 'Matematica Aplicada 001-D', imagen: 'assets/source/Matematica.webp' },
    { id: 2, nombre: 'Programacion mobile 003-A', imagen: 'assets/source/Programacion.jpg' },
    { id: 3, nombre: 'Estadistica 001-D', imagen: 'assets/source/Estadistica.jpg' },
    { id: 4, nombre: 'Ingles Avanzado 004-A', imagen: 'assets/source/Ingles.jpg' },
    { id: 5, nombre: 'Etica 003-B', imagen: 'assets/source/etica.webp' },
    { id: 6, nombre: 'Arquitectura 005-B', imagen: 'assets/source/Arquitectura.webp' },
    { id: 7, nombre: 'Calidad de software 006-F', imagen: 'assets/source/Calidad.webp' },
  ];
  profesorId: number | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.obtenerProfesorId();
  }

  obtenerProfesorId() {
    const username = localStorage.getItem('username');
    this.http.get<any[]>(`http://localhost:3000/users?username=${username}`).subscribe(users => {
      const user = users[0];
      if (user && user.role === 'profesor') {
        this.profesorId = user.id;
      }
    });
  }

  esAsignaturaDelProfesor(asignaturaId: number): boolean {
    return this.profesorId === asignaturaId;
  }
}