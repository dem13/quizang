import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizPlayerBoardCardComponent } from './quiz-player-board-card.component';

describe('QuizPlayerBoardCardComponent', () => {
  let component: QuizPlayerBoardCardComponent;
  let fixture: ComponentFixture<QuizPlayerBoardCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizPlayerBoardCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizPlayerBoardCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
