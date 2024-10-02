import { Component, EventEmitter, Input, Output } from '@angular/core';
import { QuizPlayersBoardComponent } from './quiz-players-board/quiz-players-board.component';
import { QuizQuestionComponent } from './quiz-question/quiz-question.component';
import { QuizPlaygroundControlsComponent } from './quiz-playground-controls/quiz-playground-controls.component';
import { QuizResult } from '../quiz-result';
import { QuizSettings } from '../../../domain/quiz-settings';
import { QuizGame } from '../../../domain/quiz-game';
import { HttpClient } from '@angular/common/http';
import { OpentdbStaticQuestionRepository } from './opendbt-static-question-repository';


@Component({
  selector: 'app-quiz-playground',
  standalone: true,
  imports: [QuizPlayersBoardComponent, QuizQuestionComponent, QuizPlaygroundControlsComponent],
  templateUrl: './quiz-playground.component.html',
  styleUrl: './quiz-playground.component.scss',
})
export class QuizPlaygroundComponent {
  @Input({ required: true }) quizSettings: QuizSettings;

  @Output() gameEnded = new EventEmitter<QuizResult>();

  quizGame: QuizGame;

  constructor(private http: HttpClient) { }

  async ngOnInit() {
    this.quizGame = new QuizGame(this.quizSettings, new OpentdbStaticQuestionRepository(this.http));
    this.quizGame.onEnd(() => this.gameEnded.emit(new QuizResult(this.quizGame.getPlayers() || [])));
    await this.quizGame.init();
  }

  onQuestionAnswered() {
    if (!this.quizGame) {
      return;
    }

    this.quizGame.questionAnswered();
  }

  onNextClicked() {
    this.quizGame.nextTurn();
  }
}
