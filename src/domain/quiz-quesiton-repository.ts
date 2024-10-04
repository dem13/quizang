import { QuizQuestion } from './quiz-question';

export interface QuizQuestionRepository {
  getMany(limit: number, difficulty: string): Promise<QuizQuestion[]>;
}