import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadoKClientesComponent } from './resultado-k-clientes.component';

describe('ResultadoKClientesComponent', () => {
  let component: ResultadoKClientesComponent;
  let fixture: ComponentFixture<ResultadoKClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultadoKClientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadoKClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
