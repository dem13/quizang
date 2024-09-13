import { Component } from '@angular/core';
import { QuizComponent } from '../quiz/quiz.component';

@Component({
  selector: 'app-quiz-card',
  standalone: true,
  imports: [QuizComponent],
  templateUrl: './quiz-card.component.html',
  styleUrl: './quiz-card.component.scss'
})
export class QuizCardComponent {

}
