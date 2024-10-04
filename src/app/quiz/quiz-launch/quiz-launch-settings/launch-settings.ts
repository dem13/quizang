
export type Difficulty = '' | 'easy' | 'medium' | 'hard';

export interface LaunchNumberSettings {
  playersAmount: number;
  livesAmount: number;
  roundsAmount: number;
  answerMinutes: number;
  answerSeconds: number;
}

export interface LaunchStringSettings {
  difficulty: Difficulty;
}

export type LaunchSettings = LaunchNumberSettings & LaunchStringSettings;