import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroAsistenciasPage } from './registro-asistencias.page';
import { IonicModule } from '@ionic/angular';

describe('RegistroAsistenciasPage', () => {
  let component: RegistroAsistenciasPage;
  let fixture: ComponentFixture<RegistroAsistenciasPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroAsistenciasPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegistroAsistenciasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería inicializar con una lista de asistencias vacía', () => {
    expect(component.asistencias).toEqual([]);
  });

  it('debería agregar una asistencia correctamente', () => {
    const asistencia = { nombre: 'Juan', presente: true };
    component.agregarAsistencia(asistencia);
    expect(component.asistencias.length).toBe(1);
    expect(component.asistencias[0]).toEqual(asistencia);
  });

  it('debería eliminar una asistencia correctamente', () => {
    const asistencia = { nombre: 'Juan', presente: true };
    component.agregarAsistencia(asistencia);
    component.eliminarAsistencia(asistencia);
    expect(component.asistencias.length).toBe(0);
  });

  it('debería marcar una asistencia como presente', () => {
    const asistencia = { nombre: 'Juan', presente: false };
    component.agregarAsistencia(asistencia);
    component.marcarPresente(asistencia);
    expect(component.asistencias[0].presente).toBe(true);
  });
});