import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadoUnifilaComponent } from './resultado-unifila.component';

describe('ResultadoUnifilaComponent', () => {
  let component: ResultadoUnifilaComponent;
  let fixture: ComponentFixture<ResultadoUnifilaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultadoUnifilaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadoUnifilaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
