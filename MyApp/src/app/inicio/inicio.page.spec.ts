import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { IonicModule, NavController, AlertController } from '@ionic/angular';
import { InicioPage } from './inicio.page';
import { of } from 'rxjs';

describe('InicioPage', () => {
  let component: InicioPage;
  let fixture: ComponentFixture<InicioPage>;
  let navCtrl: NavController;
  let alertController: AlertController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InicioPage],
      imports: [HttpClientTestingModule, IonicModule.forRoot()],
      providers: [NavController, AlertController]
    }).compileComponents();

    fixture = TestBed.createComponent(InicioPage);
    component = fixture.componentInstance;
    navCtrl = TestBed.inject(NavController);
    alertController = TestBed.inject(AlertController);
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería inicializar con nombre de usuario y contraseña vacíos', () => {
    expect(component.username).toBe('');
    expect(component.password).toBe('');
  });

  it('debería mostrar mensaje de error para inicio de sesión incorrecto', () => {
    spyOn(component['http'], 'get').and.returnValue(of([{ username: 'test', password: 'test' }]));
    component.username = 'wrong';
    component.password = 'wrong';
    component.login();
    expect(component.errorMessage).toBe('Usuario o contraseña incorrectos');
  });

  it('debería navegar a /menu para el rol de profesor', () => {
    spyOn(component['http'], 'get').and.returnValue(of([{ username: 'profesor', password: 'test', role: 'profesor' }]));
    spyOn(navCtrl, 'navigateForward');
    component.username = 'profesor';
    component.password = 'test';
    component.login();
    expect(navCtrl.navigateForward).toHaveBeenCalledWith('/menu');
  });

  it('debería navegar a /menu-profesor para el rol de estudiante', () => {
    spyOn(component['http'], 'get').and.returnValue(of([{ username: 'estudiante', password: 'test', role: 'estudiante' }]));
    spyOn(navCtrl, 'navigateForward');
    component.username = 'estudiante';
    component.password = 'test';
    component.login();
    expect(navCtrl.navigateForward).toHaveBeenCalledWith('/menu-profesor');
  });

  it('debería limpiar el mensaje de error en un inicio de sesión exitoso', () => {
    spyOn(component['http'], 'get').and.returnValue(of([{ username: 'test', password: 'test', role: 'profesor' }]));
    component.username = 'test';
    component.password = 'test';
    component.login();
    expect(component.errorMessage).toBe('');
  });

  it('debería almacenar el rol del usuario en localStorage en un inicio de sesión exitoso', () => {
    spyOn(component['http'], 'get').and.returnValue(of([{ username: 'test', password: 'test', role: 'profesor' }]));
    spyOn(localStorage, 'setItem');
    component.username = 'test';
    component.password = 'test';
    component.login();
    expect(localStorage.setItem).toHaveBeenCalledWith('userType', 'profesor');
  });

  it('debería almacenar el nombre de usuario en localStorage en un inicio de sesión exitoso', () => {
    spyOn(component['http'], 'get').and.returnValue(of([{ username: 'test', password: 'test', role: 'profesor' }]));
    spyOn(localStorage, 'setItem');
    component.username = 'test';
    component.password = 'test';
    component.login();
    expect(localStorage.setItem).toHaveBeenCalledWith('username', 'test');
  });

  it('debería mostrar una alerta al enviar el correo', async () => {
    spyOn(alertController, 'create').and.callThrough();
    await component.enviarCorreo();
    expect(alertController.create).toHaveBeenCalled();
  });

  it('debería establecer errorMessage como cadena vacía inicialmente', () => {
    expect(component.errorMessage).toBe('');
  });
});