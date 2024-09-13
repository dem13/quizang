import { Component } from '@angular/core';
import { QuizLaunchComponent } from './quiz-launch/quiz-launch.component';
import { GameSettings } from './quiz-settings';
import { QuizPlaygroundComponent } from './quiz-playground/quiz-playground.component';
import { QuizResult } from './quiz-result';
import { QuizPodiumComponent } from './quiz-podium/quiz-podium.component';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [QuizLaunchComponent, QuizPlaygroundComponent, QuizPodiumComponent],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.scss'
})
export class QuizComponent {
  gameSettings?: GameSettings;
  quizResult?: QuizResult;

  onLaunch(settings: GameSettings) {
    this.gameSettings = settings;
  }

  onGameEnded(result: QuizResult) {
    this.quizResult = result;
  }
}
