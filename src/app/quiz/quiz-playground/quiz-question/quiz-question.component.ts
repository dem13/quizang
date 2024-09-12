import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Question } from '../../question';

@Component({
  selector: 'app-quiz-question',
  standalone: true,
  imports: [],
  templateUrl: './quiz-question.component.html',
  styleUrl: './quiz-question.component.scss'
})
export class QuizQuestionComponent {
  @Input() question?: Question
  @Output() answered = new EventEmitter();

  onAnswerClicked(answer: string) {
    return () => {
      if (this.question?.selectedAnswer) {
        return;
      }

      this.question?.answer(answer);
      this.answered.emit();
    } 
  }
}
