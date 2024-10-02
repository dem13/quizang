export type LaunchSettingNames = 'playersAmount' | 'livesAmount' | 'roundsAmount';

export interface LaunchSettings {
  playersAmount: number;
  livesAmount: number;
  roundsAmount: number;
}