import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizPlayersBoardComponent } from './quiz-players-board.component';

describe('QuizPlayersBoardComponent', () => {
  let component: QuizPlayersBoardComponent;
  let fixture: ComponentFixture<QuizPlayersBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizPlayersBoardComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(QuizPlayersBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
