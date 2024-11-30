import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule, AlertController } from '@ionic/angular';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of, throwError } from 'rxjs';
import { CambioClavePage } from './cambio-clave.page';

describe('CambioClavePage', () => {
  let component: CambioClavePage;
  let fixture: ComponentFixture<CambioClavePage>;
  let alertController: AlertController;

  beforeEach(async () => {
    const alertControllerMock = {
      create: jasmine.createSpy('create').and.returnValue(Promise.resolve({
        present: () => Promise.resolve()
      }))
    };

    await TestBed.configureTestingModule({
      declarations: [CambioClavePage],
      imports: [IonicModule.forRoot(), HttpClientTestingModule],
      providers: [
        { provide: AlertController, useValue: alertControllerMock }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CambioClavePage);
    component = fixture.componentInstance;
    alertController = TestBed.inject(AlertController);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});