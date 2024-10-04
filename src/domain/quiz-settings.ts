
export class QuizPlayerSetting {
  constructor(public readonly name: string, public readonly id: string) {}
}

export class QuizSettings {
  constructor(
    public readonly livesAmount: number, 
    public readonly roundsAmount: number, 
    public readonly playersSettings: QuizPlayerSetting[],
    public readonly answerTime: number,
    public readonly difficulty: string,
  ) {}
}