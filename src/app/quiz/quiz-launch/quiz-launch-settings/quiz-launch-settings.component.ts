import { Component, EventEmitter, Output } from '@angular/core';
import { LaunchSettings, LaunchSettingNames } from './launch-settings';
import { addZeroToDigit } from '../../../../helpers/add-zero-to-digit';

@Component({
  selector: 'app-quiz-launch-settings',
  standalone: true,
  imports: [],
  templateUrl: './quiz-launch-settings.component.html',
  styleUrl: './quiz-launch-settings.component.scss',
})
export class QuizLaunchSettingsComponent {
  @Output() settingChaned = new EventEmitter<LaunchSettings>();

  addZeroToDigit = addZeroToDigit;

  launchSettings: LaunchSettings = {
    playersAmount: 3,
    livesAmount: 5,
    roundsAmount: 10,
    answerMinutes: 1,
    answerSeconds: 0,
  };

  ngOnInit() {
    this.settingChaned.emit(this.launchSettings);
  }

  onSettingInput(settingName: LaunchSettingNames) {
    return (event: Event) => {
      const input = event.target as HTMLInputElement;
      this.launchSettings[settingName] = +input.value;
      this.settingChaned.emit(this.launchSettings);
    };
  }
}
