export type LaunchSettingNames = 'playersAmount' | 'livesAmount' | 'roundsAmount' | 'answerMinutes' | 'answerSeconds';

export interface LaunchSettings {
  playersAmount: number;
  livesAmount: number;
  roundsAmount: number;
  answerMinutes: number;
  answerSeconds: number;
}