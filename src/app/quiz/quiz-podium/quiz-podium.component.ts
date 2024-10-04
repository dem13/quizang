import { Component, EventEmitter, Input, Output } from '@angular/core';
import { QuizResult } from '../quiz-result';

@Component({
  selector: 'app-quiz-podium',
  standalone: true,
  imports: [],
  templateUrl: './quiz-podium.component.html',
  styleUrl: './quiz-podium.component.scss',
})
export class QuizPodiumComponent {
  @Output() restarted = new EventEmitter();

  @Input() quizResult?: QuizResult;
  
  onRestartClicked() {
    this.restarted.emit();
  }

  onHomeClicked() {
    window.location.reload();
  }
}
