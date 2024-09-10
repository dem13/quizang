import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-quiz-player-settings',
  standalone: true,
  imports: [],
  templateUrl: './quiz-player-settings.component.html',
  styleUrl: './quiz-player-settings.component.scss'
})
export class QuizPlayerSettingsComponent {
  @Input() playerNames: string[] = [];

  onPlayerNameInput(playerIndex: number) {
    const ctx = this;
    return (event: any) => {
      ctx.playerNames[playerIndex] = event.target.value
    }
  }
}
