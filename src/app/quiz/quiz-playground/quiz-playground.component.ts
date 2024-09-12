import { Component, Input } from '@angular/core';
import { GameSettings } from '../quiz-settings';
import { QuizPlayersBoardComponent } from './quiz-players-board/quiz-players-board.component';
import { QuizQuestionComponent } from './quiz-question/quiz-question.component';
import { QuizGame } from './quiz-game';
import { Question } from '../question';
import { QuizPlaygroundControlsComponent } from './quiz-playground-controls/quiz-playground-controls.component';


@Component({
  selector: 'app-quiz-playground',
  standalone: true,
  imports: [QuizPlayersBoardComponent, QuizQuestionComponent, QuizPlaygroundControlsComponent],
  templateUrl: './quiz-playground.component.html',
  styleUrl: './quiz-playground.component.scss'
})
export class QuizPlaygroundComponent {
  @Input({ required: true }) gameSettings?: GameSettings;
  quizGame?: QuizGame;
  selectedPlayerIndex: number = 0;
  currentQuestion?: Question;

  ngOnInit() {
    if (!this.gameSettings) {
      return;
    }

    this.quizGame = new QuizGame(this.gameSettings);
    this.currentQuestion = this.quizGame.settings.questions[0];
  }

  onQuestionAnswered() {
    if (!this.quizGame) {
      return;
    }

  }

  onNextClicked() {
    this.selectedPlayerIndex++;
    this.currentQuestion = this.quizGame?.settings.questions[this.selectedPlayerIndex];
  }
}
