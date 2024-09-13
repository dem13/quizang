
export class Player {
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