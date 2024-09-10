import { Component } from '@angular/core';

@Component({
  selector: 'app-quiz-player-settings',
  standalone: true,
  imports: [],
  templateUrl: './quiz-player-settings.component.html',
  styleUrl: './quiz-player-settings.component.scss'
})
export class QuizPlayerSettingsComponent {
  playerNames = ['Demian', 'Ryan', 'David', 'Andrej']
}
