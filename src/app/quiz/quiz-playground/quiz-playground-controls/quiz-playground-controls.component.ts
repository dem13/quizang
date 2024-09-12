import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-quiz-playground-controls',
  standalone: true,
  imports: [],
  templateUrl: './quiz-playground-controls.component.html',
  styleUrl: './quiz-playground-controls.component.scss'
})
export class QuizPlaygroundControlsComponent {
  @Output() nextClicked = new EventEmitter();
  @Input() visible = false;
}
