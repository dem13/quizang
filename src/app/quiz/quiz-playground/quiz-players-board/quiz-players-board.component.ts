import { Component, Input } from '@angular/core';
import { QuizPlayerBoardCardComponent } from './quiz-player-board-card/quiz-player-board-card.component';
import { Player } from '../../player';

@Component({
  selector: 'app-quiz-players-board',
  standalone: true,
  imports: [QuizPlayerBoardCardComponent ],
  templateUrl: './quiz-players-board.component.html',
  styleUrl: './quiz-players-board.component.scss',
})
export class QuizPlayersBoardComponent {
  @Input() players: Player[] = [];

  @Input() selectedPlayerIndex = 0;

  getPlayerBoardCardElId(playerId: string) {
    return `player-board-card-${playerId}`;
  }

  ngAfterContentInit() {
    setTimeout( () => 
      this.selectPlayer(this.selectedPlayerIndex));
  }

  ngOnChanges() {
    this.selectPlayer(this.selectedPlayerIndex);
  }

  selectPlayer(index: number) {
    const selectedPlayer = this.players[ index % this.players.length];

    if (!selectedPlayer) {
      return;
    }

    this.selectedPlayerIndex = index;
    this.players.forEach(player => player.unselect());
    document.querySelector(`#${this.getPlayerBoardCardElId(selectedPlayer.id)}`)?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center',
    });

    selectedPlayer.select();

    return selectedPlayer;
  }
}
