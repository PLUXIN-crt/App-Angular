import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LectorQrPage } from './lector-qr.page';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';

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

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display scan result', () => {
    const result = '{"className":"Math","subject":"Algebra","date":"2023-10-10"}';
    component.handleQrCodeResult(result);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('div p').textContent).toContain(result);
  });

  it('should update form with QR data', () => {
    const result = '{"className":"Math","subject":"Algebra","date":"2023-10-10"}';
    component.handleQrCodeResult(result);
    fixture.detectChanges();
    expect(component.attendanceForm.value.className).toBe('Math');
    expect(component.attendanceForm.value.subject).toBe('Algebra');
    expect(component.attendanceForm.value.date).toBe('2023-10-10');
  });
});