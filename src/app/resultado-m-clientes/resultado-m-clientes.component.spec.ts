import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadoMClientesComponent } from './resultado-m-clientes.component';

describe('ResultadoMClientesComponent', () => {
  let component: ResultadoMClientesComponent;
  let fixture: ComponentFixture<ResultadoMClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultadoMClientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadoMClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
