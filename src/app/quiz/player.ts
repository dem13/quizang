
export class Player {
    name: string;
    id: string;
    isSelected: boolean = false;
    lives: number;

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
}