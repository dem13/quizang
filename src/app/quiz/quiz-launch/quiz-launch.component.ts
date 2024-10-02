import { Component, EventEmitter, Output } from '@angular/core';
import { QuizLaunchSettingsComponent } from './quiz-launch-settings/quiz-launch-settings.component';
import { QuizPlayerSettingsComponent } from './quiz-player-settings/quiz-player-settings.component';
import { QuizLaunchButtonComponent } from './quiz-launch-button/quiz-launch-button.component';
import { LaunchSettings } from './quiz-launch-settings/launch-settings';
import { QuizLaunchService } from './quiz-launch.service';
import { QuizSettings } from '../../../domain/quiz-settings';

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
  @Output() launched = new EventEmitter<QuizSettings>();
  launchSettings: LaunchSettings;
  playerNames: string[] = [];

  constructor(private launchService: QuizLaunchService) {}

  onSettingChanged(launchSettings: LaunchSettings) {
    this.launchSettings = launchSettings;
    this.adjustPlayerNames();
  }

  adjustPlayerNames() {
    const playersAmountDifference = this.launchSettings.playersAmount - this.playerNames.length;

    if (playersAmountDifference > 0) {
      this.playerNames.push(...new Array(playersAmountDifference).fill(''));
    } else {
      this.playerNames.splice(this.playerNames.length + playersAmountDifference, Math.abs(playersAmountDifference))
    }
  }

  async launchGame() {
    const quizSettings = await this.launchService.initializeGameSettings(this.launchSettings, this.playerNames);
    
    this.launched.emit(quizSettings);
  }
}
