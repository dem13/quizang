import { QuizPlayer } from "./quiz-player";
import { QuizQuestion } from "./quiz-question";

export class QuizTurn {
    constructor(
        public readonly index: number,
        public readonly question: QuizQuestion,
        public readonly player: QuizPlayer,
    ) {}
}