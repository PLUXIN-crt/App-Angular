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

  // Aquí puedes agregar tus pruebas unitarias
});