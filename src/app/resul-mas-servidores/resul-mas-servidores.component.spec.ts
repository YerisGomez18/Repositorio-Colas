import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResulMasServidoresComponent } from './resul-mas-servidores.component';

describe('ResulMasServidoresComponent', () => {
  let component: ResulMasServidoresComponent;
  let fixture: ComponentFixture<ResulMasServidoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResulMasServidoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResulMasServidoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
