import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LectorQrPage } from './lector-qr.page';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';
import { of } from 'rxjs';

describe('LectorQrPage', () => {
  let component: LectorQrPage;
  let fixture: ComponentFixture<LectorQrPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LectorQrPage],
      imports: [
        ZXingScannerModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterTestingModule,
        IonicModule.forRoot()
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LectorQrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería mostrar el resultado del escaneo', () => {
    const result = '{"className":"Math","subject":"Algebra","date":"2023-10-10"}';
    component.handleQrCodeResult(result);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('div p').textContent).toContain(result);
  });

  it('debería actualizar el formulario con los datos del QR', () => {
    const result = '{"className":"Math","subject":"Algebra","date":"2023-10-10"}';
    component.handleQrCodeResult(result);
    fixture.detectChanges();
    expect(component.attendanceForm.value.className).toBe('Math');
    expect(component.attendanceForm.value.subject).toBe('Algebra');
    expect(component.attendanceForm.value.date).toBe('2023-10-10');
  });

  it('debería mostrar un mensaje de error si el QR es inválido', () => {
    const invalidResult = 'invalid QR code';
    component.handleQrCodeResult(invalidResult);
    fixture.detectChanges();
    expect(component.message).toBe('Código QR inválido');
  });

  it('debería mostrar un mensaje si la asistencia ya está registrada', () => {
    spyOn(component['http'], 'get').and.returnValue(of([{ studentId: 1, subject: 'Math', date: '2023-10-10' }]));
    const result = '{"className":"Math","subject":"Algebra","date":"2023-10-10"}';
    component.handleQrCodeResult(result);
    fixture.detectChanges();
    expect(component.message).toBe('Ya has registrado tu asistencia para la asignatura Algebra hoy.');
  });

  it('debería registrar la asistencia correctamente', () => {
    spyOn(component['http'], 'post').and.returnValue(of({}));
    const result = '{"className":"Math","subject":"Algebra","date":"2023-10-10"}';
    component.handleQrCodeResult(result);
    fixture.detectChanges();
    expect(component.message).toBe('Asistencia registrada correctamente');
  });
});