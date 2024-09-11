import { Component, Input } from '@angular/core';
import { Player } from '../../../player';

@Component({
  selector: 'app-quiz-player-board-card',
  standalone: true,
  imports: [],
  templateUrl: './quiz-player-board-card.component.html',
  styleUrl: './quiz-player-board-card.component.scss'
})
export class QuizPlayerBoardCardComponent {
  @Input({ required: true }) player?: Player
}
