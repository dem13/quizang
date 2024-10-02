
import { firstValueFrom } from 'rxjs';
import { OpentdbQuestionsResponse } from './opentdb-questions-response';
import { QuizQuestion } from "../../../domain/quiz-question";
import { QuizQuestionRepository } from "../../../domain/quiz-quesiton-repository";
import { HttpClient } from '@angular/common/http';

export class OpentdbQuestionRepository implements QuizQuestionRepository {
  constructor(private http: HttpClient) { }

  async getMany(limit: number): Promise<QuizQuestion[]> {
    const response = await firstValueFrom(this.http.get<OpentdbQuestionsResponse>(`https://opentdb.com/api.php?amount=${limit}&type=multiple`));

    if (response.response_code !== 0) {
      throw new Error('Failed to fetch questions. Response code: ' + response.response_code);
    }

    return response.results.map(result => new QuizQuestion(
      this.unescapeHtmlSpecialChars(result.question),
      this.unescapeHtmlSpecialChars(result.correct_answer),
      result.incorrect_answers.map(incorrectAnswer => this.unescapeHtmlSpecialChars(incorrectAnswer)),
    ));
  }

  private unescapeHtmlSpecialChars(str: string) {
    const div = document.createElement('div');
    div.innerHTML = str;
    return div.innerText;
  }
}