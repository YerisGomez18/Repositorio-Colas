import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnifilaComponent } from './unifila.component';

describe('UnifilaComponent', () => {
  let component: UnifilaComponent;
  let fixture: ComponentFixture<UnifilaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnifilaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnifilaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
