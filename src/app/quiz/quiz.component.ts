import { Component } from '@angular/core';
import { QuizLaunchComponent } from './quiz-launch/quiz-launch.component';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [QuizLaunchComponent],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.scss'
})
export class QuizComponent {

}
