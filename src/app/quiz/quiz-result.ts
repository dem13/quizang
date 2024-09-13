import { Player } from "./player";

export class QuizResult {
    constructor(private players: Player[]) {

    }

    getPlayersRating() {
        return this.players.sort((playerA, playerB) => playerA.points > playerB.points ? -1 : 1);
    }
}