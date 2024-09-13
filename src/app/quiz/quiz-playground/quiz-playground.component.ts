import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GameSettings } from '../quiz-settings';
import { QuizPlayersBoardComponent } from './quiz-players-board/quiz-players-board.component';
import { QuizQuestionComponent } from './quiz-question/quiz-question.component';
import { QuizGame } from './quiz-game';
import { QuizPlaygroundControlsComponent } from './quiz-playground-controls/quiz-playground-controls.component';
import { QuizResult } from '../quiz-result';


@Component({
  selector: 'app-quiz-playground',
  standalone: true,
  imports: [QuizPlayersBoardComponent, QuizQuestionComponent, QuizPlaygroundControlsComponent],
  templateUrl: './quiz-playground.component.html',
  styleUrl: './quiz-playground.component.scss'
})
export class QuizPlaygroundComponent {
  @Input({ required: true }) gameSettings?: GameSettings;
  @Output() gameEnded = new EventEmitter<QuizResult>();
  quizGame?: QuizGame;

  ngOnInit() {
    if (!this.gameSettings) {
      return;
    }

    this.quizGame = new QuizGame(this.gameSettings);
    this.quizGame.onEnd(() => this.gameEnded.emit(new QuizResult(this.quizGame?.settings.players || [])))
  }

  onQuestionAnswered() {
    if (!this.quizGame) {
      return;
    }

    this.quizGame.questionAnswered();
  }

  onNextClicked() {
    this.quizGame?.nextTurn();
  }
}
