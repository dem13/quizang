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

  selectedPlayerIndex = 0;

  getPlayerBoardCardElId(playerId: string) {
    return `player-board-card-${playerId}`;
  }

  ngAfterContentInit() {
    this.selectPlayer(this.selectedPlayerIndex);
  }

  ngOnInit() {
    // this.players = [
    //   new Player('Andrej', 'Andrej-0', 6),
    //   new Player('David', 'David-1', 3),
    //   new Player('Demian', 'Demian-2', 7),
    //   new Player('Ryan', 'Ryan-3', 5),
    //   new Player('Arif', 'Arif-4', 5),
    // ];

    // setInterval(() => this.selectPlayer(this.players[Math.floor(Math.random() * this.players.length)].id), 5000);
    setInterval(() => this.selectPlayer(++this.selectedPlayerIndex), 1000);
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

    player.lives = Math.floor(Math.random() * 6) + 1;  

    return player;
  }
}
