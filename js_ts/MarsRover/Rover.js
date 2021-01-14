class Direction {
    constructor(cardinalNumber) {
        if(cardinalNumber > 3 || cardinalNumber <0) {
            throw 'Invalid value for cardinal number (0-3)';
        }
        this.cardinal = cardinalNumber;
    }

    rotate90Left() {
        this.cardinal--;
        if(this.cardinal < 0) {
            this.cardinal = 3;
        }
    }

    rotate90Rigth() {
        this.cardinal++;
        if(this.cardinal > 3) {
            this.cardinal = 0;
        }
    }

    stringify() {
        let directionString;

        switch(this.cardinal) {
            case 0:
                directionString = 'S';
                break;
            case 1:
                directionString = 'O';
                break;
            case 2:
                directionString = 'N';
                break;
            case 3:
                directionString = 'E';
                break;
            default:
                break;
        }

        return directionString;
    }
}

class Position {
    static N_S = 'N/S';
    static S_N = 'S/N';
    static E_O = 'E/O';
    static O_E = 'O/E';

    constructor(x, y) {
        if(x < 0 || y < 0) {
            throw 'Invalid position coordinates';
        }
        this.x = x;
        this.y = y;
    }

    moveToSouth(){
        this.y++;
    }
    moveToNorth(){
        this.y--;
        if(this.y < 0) {
            this.y = 0;
        }
    }
    moveToEast(){
        this.x++;
    }
    moveToWest(){
        this.x--;
        if(this.x < 0) {
            this.x = 0;
        }
    }

    stringify() {
        return `${this.x}:${this.y}`;
    }
}


class Rover{
    constructor(grid) {
        this.grid = grid;
        this.position = new Position(0, 0);
        this.direction = new Direction(0);
    }

    execute(commandString) {
        const individualCommand = commandString.split('');
        let lastPosition;
        
        individualCommand.forEach(command => {
            lastPosition = this.executeCommand(command);
        });

        return lastPosition;
    }

    executeCommand(command) {
        if(command === 'L') {
            this.direction.rotate90Left();
        } else if (command === 'R') {
            this.direction.rotate90Rigth();
        } else if (command === 'M') {
            this.move();
        }
        
        return `${this.position.stringify()}:${this.direction.stringify()}`;
    }

    move() {
        const direction = this.direction.stringify();
        switch(direction) {
            case 'S':
                this.position.moveToSouth();
                break;
            case 'N':
                this.position.moveToNorth();
                break;
            case 'E':
                this.position.moveToEast();
                break;
            case 'W':
                this.position.moveToWest();
                break;
        }
    }
}

module.exports = Rover