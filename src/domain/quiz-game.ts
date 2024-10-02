import { QuizPlayer } from './quiz-player';
import { QuizQuestion } from './quiz-question';
import { QuizQuestionRepository } from './quiz-quesiton-repository';
import { QuizSettings } from './quiz-settings';
import { QuizTurn } from './quiz-turn';

const FIRST_ROUND_INDEX = 0;

export class QuizGame {
  private players: QuizPlayer[];

  private playersLeft: number;

  private questions: QuizQuestion[];

  private currentTurn: QuizTurn;

  private onEndedCallback: () => void;

  constructor(private settings: QuizSettings, private questionRepository: QuizQuestionRepository) {
    this.initPlayers();
  }

  private initPlayers() {
    this.players = this.settings.playersSettings.map(playerSetting => new QuizPlayer(
      playerSetting.name,
      playerSetting.id,
      this.settings.livesAmount,
    ));
    this.playersLeft = this.players.length;
  }

  private buildRoundByIndex(index: number) {
    return new QuizTurn(index, this.questions[index], this.players[index % this.players.length]);
  }

  async init() {
    const questionCount = this.players.length * this.settings.roundsAmount;
    this.questions = await this.questionRepository.getMany(questionCount);
    this.currentTurn = this.buildRoundByIndex(FIRST_ROUND_INDEX);
  }

  nextTurn() {
    const nextTurnIndex = this.currentTurn.index + 1;

    if (this.getCurrentRoundNumber(nextTurnIndex) > this.settings.roundsAmount || this.playersLeft < 1) {
      this.onEndedCallback();
      return;
    }

    const nextTurn = this.buildRoundByIndex(nextTurnIndex);
    this.currentTurn = nextTurn;

    if (!nextTurn.player.isAlive()) {
      this.nextTurn();
      return;
    }
  }

  questionAnswered() {
    if (!this.currentTurn.question.isCorrectlyAnswered()) {
      this.getCurrentPlayer().loseLife();

      if (!this.getCurrentPlayer().isAlive()) {
        this.playersLeft--;
      }
    } else {
      this.getCurrentPlayer().points++;
    }
  }

  getCurrentPlayer() {
    return this.currentTurn.player;
  }

  onEnd(callback: () => void) {
    this.onEndedCallback = callback;
  }

  getPlayers() {
    return this.players;
  }

  getSettings() {
    return this.settings;
  }

  private updatesCount = 0;

  getCurrentTurn() {
    console.log(++this.updatesCount);
    return this.currentTurn;
  }

  isInitialized() {
    return !!this.currentTurn;
  }

  getCurrentRoundNumber(index?: number) {
    return Math.floor((index || this.currentTurn.index) / this.settings.playersSettings.length) + 1;
  }
}