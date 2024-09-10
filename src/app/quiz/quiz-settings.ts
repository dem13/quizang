import { LaunchSettings } from "./quiz-launch/quiz-launch-settings/launch-settings";

export interface GameSettings extends LaunchSettings {
    playerNames: string[];
}