import { Player } from "../player";
import { Question } from "../question";
import { GameSettings } from "../quiz-settings";

export class QuizGame {
    selectedPlayerIndex: number = 0;

    constructor(public settings: GameSettings) {}
}