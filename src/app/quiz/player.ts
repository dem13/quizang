
export class Player {
    name: string;
    id: string;
    isSelected: boolean = false;

    constructor(name: string, id: string) {
        this.name = name;
        this.id = id;
    }

    select() {
        this.isSelected = true;
    }

    unselect() {
        this.isSelected = false;
    }
}