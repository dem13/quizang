import { Component, Input } from '@angular/core';
import { GameSettings } from '../quiz-settings';

@Component({
  selector: 'app-quiz-playground',
  standalone: true,
  imports: [],
  templateUrl: './quiz-playground.component.html',
  styleUrl: './quiz-playground.component.scss'
})
export class QuizPlaygroundComponent {
  @Input({ required: true }) gameSettings?: GameSettings;
  stringify(data: any) {
    return JSON.stringify(data);
  }
}
