import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroAsistenciasPage } from './registro-asistencias.page';

describe('RegistroAsistenciasPage', () => {
  let component: RegistroAsistenciasPage;
  let fixture: ComponentFixture<RegistroAsistenciasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroAsistenciasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
