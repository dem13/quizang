import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LaunchSettings, LaunchSettingNames } from './launch-settings';

@Component({
  selector: 'app-quiz-launch-settings',
  standalone: true,
  imports: [],
  templateUrl: './quiz-launch-settings.component.html',
  styleUrl: './quiz-launch-settings.component.scss'
})
export class QuizLaunchSettingsComponent {
  @Output() settingChaned = new EventEmitter<LaunchSettings>();
  @Input({ required: true }) launchSettings: LaunchSettings = {};



  onSettingInput(settingName: LaunchSettingNames) {
    const ctx = this;
    return (event: any) => {
      ctx.launchSettings[settingName] = +event.target.value
      ctx.settingChaned.emit(ctx.launchSettings);
    };
  }
}
