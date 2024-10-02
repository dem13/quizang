import { Component, EventEmitter, Input, Output } from '@angular/core';
import { QuizQuestion } from '../../../../domain/quiz-question';

@Component({
  selector: 'app-quiz-question',
  standalone: true,
  imports: [],
  templateUrl: './quiz-question.component.html',
  styleUrl: './quiz-question.component.scss',
})
export class QuizQuestionComponent {
  @Input() question: QuizQuestion;

  @Output() answered = new EventEmitter();

  onAnswerClicked(answer: string) {
    return () => {
      if (this.question.selectedAnswer) {
        return;
      }

      this.question.answer(answer);
      this.answered.emit();
    };
  }
}
