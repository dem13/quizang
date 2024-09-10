import { Component } from '@angular/core';
import { QuizLaunchComponent } from './quiz-launch/quiz-launch.component';
import { GameSettings } from './quiz-settings';
import { QuizPlaygroundComponent } from './quiz-playground/quiz-playground.component';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [QuizLaunchComponent, QuizPlaygroundComponent],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.scss'
})
export class QuizComponent {
  launched = false;
  gameSettings?: GameSettings;

  onLaunch(settings: GameSettings) {
    this.launched = true;
    this.gameSettings = settings;
  }
}
