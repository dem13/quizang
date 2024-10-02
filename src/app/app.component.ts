import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { QuizCardComponent } from './quiz-card/quiz-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, QuizCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'QuizAng';
}
