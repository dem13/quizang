import { Component, EventEmitter, Output } from '@angular/core';
import { addZeroToDigit } from '../../../../helpers/add-zero-to-digit';

@Component({
  selector: 'app-quiz-timer',
  standalone: true,
  imports: [],
  templateUrl: './quiz-timer.component.html',
  styleUrl: './quiz-timer.component.scss',
})
export class QuizTimerComponent {
  @Output() timeEnded = new EventEmitter();

  timeLeft: number = 0;

  timerInterval?: ReturnType<typeof setInterval>;

  getPrettyTime() {
    if (!this.timeLeft) {
      return '00:00';
    }
    const minutes = addZeroToDigit(Math.floor(this.timeLeft / 60));
    const seconds = addZeroToDigit(this.timeLeft % 60);
    return `${minutes}:${seconds}`;
  }

  private clearCurrentInterval() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = undefined;
    }
  }

  public startTimer(seconds: number) {
    setTimeout(() => {
      this.clearCurrentInterval();
      this.timeLeft = seconds;
      this.timerInterval = setInterval(() => {
        if (--this.timeLeft < 1) {
          clearInterval(this.timerInterval);
          this.timeEnded.emit();
        }
      }, 1000);
    }, 0);
  }

  public freezeTimer() {
    this.clearCurrentInterval();
  }
}
