import { QuizQuestion } from './quiz-question';

export interface QuizQuestionRepository {
  getMany(limit: number): Promise<QuizQuestion[]>;
}