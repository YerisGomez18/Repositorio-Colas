import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasServidoresClientesComponent } from './mas-servidores-clientes.component';

describe('MasServidoresClientesComponent', () => {
  let component: MasServidoresClientesComponent;
  let fixture: ComponentFixture<MasServidoresClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasServidoresClientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasServidoresClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
