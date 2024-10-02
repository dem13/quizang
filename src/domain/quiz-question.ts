
export class QuizQuestion {
  private schuffledAnswers?: string[];
  
  private isSkipped = false;

  public selectedAnswer = '';

  constructor(
    public readonly text: string,
    public readonly correctAnswer: string, 
    public readonly incorrectAnswers: string[],
  ) {

  }

  isAnswerCorrect(answer: string) {
    return this.correctAnswer === answer;
  }

  isAnswered() {
    return !!this.selectedAnswer || this.isSkipped;
  }

  wasSkipped() {
    return this.isSkipped;
  }

  isCorrectlyAnswered() {
    return !this.isSkipped && this.isAnswerCorrect(this.selectedAnswer);
  }

  answer(answer: string) {
    this.selectedAnswer = answer;

    return this.isAnswerCorrect(answer);
  }

  skip() {
    this.isSkipped = true;
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

    for (let i = array.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }

    return array;
  }
}