
export class QuizPlayer {
    name: string;
    id: string;
    isSelected: boolean = false;
    lives: number;
    points: number = 0;

    constructor(name: string, id: string, lives: number) {
        this.name = name;
        this.id = id;
        this.lives = lives;
    }

    loseLife() {    
        if (this.lives > 0) {
            this.lives--;
        }
    }

    select() {
        this.isSelected = true;
    }

    unselect() {
        this.isSelected = false;
    }

    isAlive() {
        return !!this.lives;
    }
}