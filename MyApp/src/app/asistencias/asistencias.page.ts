import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-asistencias',
  templateUrl: './asistencias.page.html',
  styleUrls: ['./asistencias.page.scss'],
})
export class AsistenciasPage implements OnInit {
  registros: any[] = [];
  totalAsistencias: number = 0;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.obtenerAsistencias();
  }

  obtenerAsistencias() {
    const username = localStorage.getItem('username');
    this.http.get<any[]>(`http://localhost:3000/users?username=${username}`).subscribe(users => {
      const user = users[0];
      if (user) {
        if (user.role === 'profesor') {
          this.http.get<any[]>(`http://localhost:3000/attendances?section=${user.section}`).subscribe(attendances => {
            this.totalAsistencias = attendances.length;
            const registrosMap = new Map();
            attendances.forEach(attendance => {
              if (!registrosMap.has(attendance.subject)) {
                registrosMap.set(attendance.subject, {
                  asignatura: attendance.subject,
                  seccion: attendance.section,
                  clasesAsistidas: 0,
                  totalClases: 0,
                  expandido: false,
                  asistencias: []
                });
              }
              const registro = registrosMap.get(attendance.subject);
              registro.totalClases++;
              if (attendance.presente) {
                registro.clasesAsistidas++;
              }
              registro.asistencias.push({
                fecha: attendance.date,
                presente: attendance.presente
              });
            });
            this.registros = Array.from(registrosMap.values());
          });
        } else {
          this.http.get<any[]>(`http://localhost:3000/attendances?studentId=${user.id}`).subscribe(attendances => {
            const registrosMap = new Map();
            attendances.forEach(attendance => {
              if (!registrosMap.has(attendance.subject)) {
                registrosMap.set(attendance.subject, {
                  asignatura: attendance.subject,
                  seccion: attendance.section,
                  clasesAsistidas: 0,
                  totalClases: 0,
                  expandido: false,
                  asistencias: []
                });
              }
              const registro = registrosMap.get(attendance.subject);
              registro.totalClases++;
              if (attendance.presente) {
                registro.clasesAsistidas++;
              }
              registro.asistencias.push({
                fecha: attendance.date,
                presente: attendance.presente
              });
            });
            this.registros = Array.from(registrosMap.values());
          });
        }
      }
    });
  }

  // Método para calcular el porcentaje de asistencia
  calcularPorcentaje(registro: any): number {
    return Number(((registro.clasesAsistidas / registro.totalClases) * 100).toFixed(1));
  }
}