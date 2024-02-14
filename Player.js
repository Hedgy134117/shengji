export class Player {
    constructor(name, level, prestige) {
        this.name = name;
        this.level = level;
        this.prestige = prestige;
        this.games = [];
    }

    addGame(game) {
        this.games.push(game);
    }
}