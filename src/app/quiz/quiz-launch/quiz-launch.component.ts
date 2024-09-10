import { Component } from '@angular/core';
import { QuizLaunchSettingsComponent } from './quiz-launch-settings/quiz-launch-settings.component';
import { QuizPlayerSettingsComponent } from './quiz-player-settings/quiz-player-settings.component';
import { QuizLaunchButtonComponent } from './quiz-launch-button/quiz-launch-button.component';

@Component({
  selector: 'app-quiz-launch',
  standalone: true,
  imports: [
    QuizLaunchSettingsComponent,
    QuizPlayerSettingsComponent,
    QuizLaunchButtonComponent
  ],
  templateUrl: './quiz-launch.component.html',
  styleUrl: './quiz-launch.component.scss'
})
export class QuizLaunchComponent {

}
