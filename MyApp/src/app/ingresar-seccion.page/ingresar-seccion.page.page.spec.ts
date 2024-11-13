import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IngresarSeccionPagePage } from './ingresar-seccion.page.page';

describe('IngresarSeccionPagePage', () => {
  let component: IngresarSeccionPagePage;
  let fixture: ComponentFixture<IngresarSeccionPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresarSeccionPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
