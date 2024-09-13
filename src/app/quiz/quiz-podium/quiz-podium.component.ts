import { Component, Input } from '@angular/core';
import { QuizResult } from '../quiz-result';

@Component({
  selector: 'app-quiz-podium',
  standalone: true,
  imports: [],
  templateUrl: './quiz-podium.component.html',
  styleUrl: './quiz-podium.component.scss'
})
export class QuizPodiumComponent {
  @Input() quizResult?: QuizResult;
}
