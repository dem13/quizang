import { EventEmitter } from "@angular/core";
import { Player } from "../player";
import { Question } from "../question";
import { GameSettings } from "../quiz-settings";

export class QuizGame {
    currentPlayerIndex: number = 0;
    currentQuestion: Question;
    currentRound: number = 1;
    playersLeft: number;
    ended = new EventEmitter();

    constructor(public settings: GameSettings) {
        this.currentQuestion = settings.questions[0];
        this.playersLeft = settings.players.length;
    }

    nextTurn() {
        if (this.currentPlayerIndex >= (this.settings.players.length - 1)) {
            if (this.currentRound === this.settings.roundsAmount || this.playersLeft < 2) {
                this.ended.emit();
                return;
            }

            this.currentPlayerIndex = 0;
            this.currentRound++;
        } else {
            this.currentPlayerIndex++;
        }

        if (!this.getCurrentPlayer().lives) {
            this.nextTurn();
            return;
        }

        const currentQuestionIndex = this.settings.players.length * (this.currentRound - 1) + this.currentPlayerIndex;
        this.currentQuestion = this.settings.questions[currentQuestionIndex];
    }

    questionAnswered() {
        if (!this.currentQuestion.isCorrectlyAnswered()) {
            this.getCurrentPlayer().lives--;

            if (!this.getCurrentPlayer().isAlive()) {
                this.playersLeft--;
            }
        } else {
            this.getCurrentPlayer().points++;
        }
    }

    getCurrentPlayer() {
        return this.settings.players[this.currentPlayerIndex];
    }

    onEnd(callback: Function) {
        this.ended.subscribe(callback);
    }
}