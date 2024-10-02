import { Injectable } from '@angular/core';
import { LaunchSettings } from './quiz-launch-settings/launch-settings';
import { QuizPlayerSetting, QuizSettings } from '../../../domain/quiz-settings';

@Injectable({
  providedIn: 'root',
})
export class QuizLaunchService {
  async initializeGameSettings(launchSettings: LaunchSettings, playerNames: string[]): Promise<QuizSettings> {
    if (!launchSettings.roundsAmount || !launchSettings.playersAmount) {
      throw new Error('Invalid launch settings.');
    }

    return {
      ...launchSettings,
      playersSettings: playerNames.map((name, i) => new QuizPlayerSetting(
        this.generateNameIfEmpty(name, i),
        this.generatePlayerId(name, i),
      )),
    };
  }

  private generatePlayerId(name: string, index: number) {
    return `${name}-${index + 1}`;
  }

  private generateNameIfEmpty(name: string, index: number) {
    return name.trim() || `Player #${index + 1}`;
  }
}
