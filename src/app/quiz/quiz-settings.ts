import { Player } from "./player";
import { Question } from "./question";
import { LaunchSettings } from "./quiz-launch/quiz-launch-settings/launch-settings";

export interface GameSettings extends LaunchSettings {
    players: Player[];
    questions: Question[];
}