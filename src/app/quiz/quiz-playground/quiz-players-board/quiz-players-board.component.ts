import { Component, Inject, Input } from '@angular/core';
import { QuizPlayerBoardCardComponent } from './quiz-player-board-card/quiz-player-board-card.component';
import { Player } from '../../player';

@Component({
  selector: 'app-quiz-players-board',
  standalone: true,
  imports: [QuizPlayerBoardCardComponent],
  templateUrl: './quiz-players-board.component.html',
  styleUrl: './quiz-players-board.component.scss'
})
export class QuizPlayersBoardComponent {
  @Input() players: Player[] = [];
  @Input() selectedPlayerIndex = 0;

  getPlayerBoardCardElId(playerId: string) {
    return `player-board-card-${playerId}`;
  }

  ngAfterContentInit() {
    this.selectPlayer(this.selectedPlayerIndex);
  }

  ngOnChanges() {
    console.log()
    this.selectPlayer(this.selectedPlayerIndex);
  }

  selectPlayer(index: number) {
    const player = this.players[index % this.players.length];

    if (!player) {
      return;
    }

    this.selectedPlayerIndex = index;
    this.players.forEach(player => player.unselect());
    document.querySelector(`#${this.getPlayerBoardCardElId(player.id)}`)?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center'
    });

    player.select();

    return player;
  }
}
