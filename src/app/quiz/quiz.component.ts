import { Component } from '@angular/core';
import { QuizLaunchComponent } from './quiz-launch/quiz-launch.component';
import { QuizPlaygroundComponent } from './quiz-playground/quiz-playground.component';
import { QuizResult } from './quiz-result';
import { QuizPodiumComponent } from './quiz-podium/quiz-podium.component';
import { QuizSettings } from '../../domain/quiz-settings';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [QuizLaunchComponent, QuizPlaygroundComponent, QuizPodiumComponent],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.scss',
})
export class QuizComponent {
  quizSettings?: QuizSettings;

  quizResult?: QuizResult;

  onLaunch(settings: QuizSettings) {
    this.quizSettings = settings;
  }

  onGameEnded(result: QuizResult) {
    this.quizResult = result;
  }
}
