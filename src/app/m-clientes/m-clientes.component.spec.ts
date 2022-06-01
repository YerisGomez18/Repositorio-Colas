import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MClientesComponent } from './m-clientes.component';

describe('MClientesComponent', () => {
  let component: MClientesComponent;
  let fixture: ComponentFixture<MClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MClientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
