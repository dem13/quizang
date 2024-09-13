
export class Question {
    private schuffledAnswers?: string[];
    public selectedAnswer: string = '';

    constructor(
        public text: string,
        public correctAnswer: string, 
        public incorrectAnswers: string[]
    ) {

    }

    isAnswerCorrect(answer: string) {
        return this.correctAnswer === answer;
    }

    isCorrectlyAnswered() {
        return this.isAnswerCorrect(this.selectedAnswer);
    }

    answer(answer: string) {
        this.selectedAnswer = answer;

        return this.isAnswerCorrect(answer);
    }

    getSchuffledAnswers() {
        if (this.schuffledAnswers) {
            return this.schuffledAnswers;
        }

        this.schuffledAnswers = this.schuffle([this.correctAnswer, ...this.incorrectAnswers]);

        return this.schuffledAnswers;
    }

    private schuffle<T>(array: T[]): T[] {
        array = [...array];

        for (var i = array.length - 1; i >= 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }

        return array;
    }
}