import { Component, ComponentFactoryResolver, EventEmitter, Output } from '@angular/core';
import { QuizLaunchSettingsComponent } from './quiz-launch-settings/quiz-launch-settings.component';
import { QuizPlayerSettingsComponent } from './quiz-player-settings/quiz-player-settings.component';
import { QuizLaunchButtonComponent } from './quiz-launch-button/quiz-launch-button.component';
import { LaunchSettings } from './quiz-launch-settings/launch-settings';
import { GameSettings } from '../quiz-settings';

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
  @Output() launched = new EventEmitter<GameSettings>();
  launchSettings: LaunchSettings = {
    playersAmount: 3,
    livesAmount: 5,
    roundsAmount: 10,
  };
  playerNames: string[] = new Array(this.launchSettings.playersAmount).fill('');

  onSettingChanged(launchSettings: LaunchSettings) {
    this.launchSettings = launchSettings;
    this.adjustPlayerNames();
    console.log(this.launchSettings)
  }

  adjustPlayerNames() {
    const playersAmountDifference = (this.launchSettings.playersAmount || 0) - this.playerNames.length;

    if (playersAmountDifference > 0) {
      this.playerNames.push(...new Array(playersAmountDifference).fill(''));
    } else {
      this.playerNames.splice(this.playerNames.length + playersAmountDifference, Math.abs(playersAmountDifference))
    }
  }

  launchGame() {
    this.launched.emit({
      ...this.launchSettings,
      playerNames: this.playerNames,
    });
  }
}
