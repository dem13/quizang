import { Component } from '@angular/core';
import { QuizLaunchComponent } from './quiz-launch/quiz-launch.component';
import { QuizPlaygroundComponent } from './quiz-playground/quiz-playground.component';
import { QuizResult } from './quiz-result';
import { QuizPodiumComponent } from './quiz-podium/quiz-podium.component';
import { QuizSettings } from '../../domain/quiz-settings';
import { QuizGame } from '../../domain/quiz-game';
import { HttpClient } from '@angular/common/http';
import { OpentdbQuestionRepository } from './quiz-playground/opendbt-question-repository';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [QuizLaunchComponent, QuizPlaygroundComponent, QuizPodiumComponent],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.scss',
})
export class QuizComponent {
  quizGame?: QuizGame;

  quizResult?: QuizResult;

  constructor(private http: HttpClient) { }

  async onLaunch(settings: QuizSettings) {
    const quizGame = new QuizGame(settings, new OpentdbQuestionRepository(this.http));
    quizGame.onEnd(() => this.quizResult = new QuizResult(quizGame.getPlayers()));
    await quizGame.init();

    this.quizGame = quizGame;
  }

  onGameEnded(result: QuizResult) {
    this.quizResult = result;
  }
}
