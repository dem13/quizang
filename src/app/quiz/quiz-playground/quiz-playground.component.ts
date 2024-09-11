import { Component, Input } from '@angular/core';
import { GameSettings } from '../quiz-settings';
import { QuizPlayersBoardComponent } from './quiz-players-board/quiz-players-board.component';
import { QuizQuestionComponent } from './quiz-question/quiz-question.component';

@Component({
  selector: 'app-quiz-playground',
  standalone: true,
  imports: [QuizPlayersBoardComponent, QuizQuestionComponent],
  templateUrl: './quiz-playground.component.html',
  styleUrl: './quiz-playground.component.scss'
})
export class QuizPlaygroundComponent {
  @Input({ required: true }) gameSettings?: GameSettings;
  questions = [
    {
      text: 'Who are you?',
      answers: [
        'Me',
        'You',
        'Human',
        'Robot',
      ],
      correctAnswer: 'You',
    }
  ]
  stringify(data: any) {
    return JSON.stringify(data);
  }
}
