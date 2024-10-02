import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizPlaygroundComponent } from './quiz-playground.component';

describe('QuizPlaygroundComponent', () => {
  let component: QuizPlaygroundComponent;
  let fixture: ComponentFixture<QuizPlaygroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizPlaygroundComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(QuizPlaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
