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

  it('should show alert when current password is incorrect', async () => {
    component.currentPassword = 'wrongPassword';
    component.newPassword = 'newPassword';
    component.confirmPassword = 'newPassword';

    await component.changePassword();

    expect(alertController.create).toHaveBeenCalledWith({
      header: 'Error',
      message: 'La contraseña actual es incorrecta',
      buttons: ['OK']
    });
  });

  it('should show alert when new password is empty', async () => {
    component.currentPassword = '12345';
    component.newPassword = '';
    component.confirmPassword = '';

    await component.changePassword();

    expect(alertController.create).toHaveBeenCalledWith({
      header: 'Error',
      message: 'Ingresar nueva clave',
      buttons: [
        {
          text: 'Cambiar Contraseña',
          handler: jasmine.any(Function)
        }
      ]
    });
  });





  it('should show alert when new password and confirmation do not match', async () => {
    component.currentPassword = '12345';
    component.newPassword = 'newPassword';
    component.confirmPassword = 'differentPassword';

    await component.changePassword();

    expect(alertController.create).toHaveBeenCalledWith({
      header: 'Error',
      message: 'Las contraseñas no coinciden',
      buttons: ['OK']
    });
  });

  it('should change password successfully', async () => {
    spyOn(component['http'], 'put').and.returnValue(of({}));
    component.currentPassword = '12345';
    component.newPassword = 'newPassword';
    component.confirmPassword = 'newPassword';

    await component.changePassword();

    expect(alertController.create).toHaveBeenCalledWith({
      header: 'Cambio de Contraseña',
      message: 'Contraseña cambiada exitosamente',
      buttons: ['OK']
    });
  });

  it('should show alert when there is an error changing the password', async () => {
    spyOn(component['http'], 'put').and.returnValue(throwError('error'));
    component.currentPassword = '12345';
    component.newPassword = 'newPassword';
    component.confirmPassword = 'newPassword';

    await component.changePassword();

    expect(alertController.create).toHaveBeenCalledWith({
      header: 'Error',
      message: 'Error al cambiar la contraseña',
      buttons: ['OK']
    });
  });
});