import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { QuizPlayersBoardComponent } from './quiz-players-board/quiz-players-board.component';
import { QuizQuestionComponent } from './quiz-question/quiz-question.component';
import { QuizPlaygroundControlsComponent } from './quiz-playground-controls/quiz-playground-controls.component';
import { QuizResult } from '../quiz-result';
import { QuizGame } from '../../../domain/quiz-game';
import { QuizTimerComponent } from './quiz-timer/quiz-timer.component';

const ANSWER_TIME = 2;

@Component({
  selector: 'app-quiz-playground',
  standalone: true,
  imports: [QuizPlayersBoardComponent, QuizQuestionComponent, QuizPlaygroundControlsComponent, QuizTimerComponent],
  templateUrl: './quiz-playground.component.html',
  styleUrl: './quiz-playground.component.scss',
})
export class QuizPlaygroundComponent {
  @Input({ required: true }) quizGame: QuizGame;

  @Output() gameEnded = new EventEmitter<QuizResult>();

  @ViewChild(QuizTimerComponent, { static: false }) timerComponent: QuizTimerComponent;

  ngAfterViewInit() {
    this.timerComponent.startTimer(this.quizGame.getSettings().answerTime);
  }

  onQuestionAnswered() {
    this.quizGame.handleQuestion();
    this.timerComponent.freezeTimer();
  }

  onTimeEnded() {
    const currentQuestion = this.quizGame.getCurrentTurn().question;
    if (!currentQuestion.isAnswered()) {
      this.quizGame.getCurrentTurn().question.skip();
      this.quizGame.handleQuestion();
    }
  }

  onNextClicked() {
    this.quizGame.nextTurn();
    this.timerComponent.startTimer(this.quizGame.getSettings().answerTime);
  }
}
