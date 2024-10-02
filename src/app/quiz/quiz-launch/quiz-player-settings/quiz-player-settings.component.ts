import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-quiz-player-settings',
  standalone: true,
  imports: [],
  templateUrl: './quiz-player-settings.component.html',
  styleUrl: './quiz-player-settings.component.scss',
})
export class QuizPlayerSettingsComponent {
  @Input() playerNames: string[] = [];

  onPlayerNameInput(playerIndex: number) {
    return (event: Event) => {
      const input = event.target as HTMLInputElement;
      this.playerNames[playerIndex] = input.value;
    };
  }
}
