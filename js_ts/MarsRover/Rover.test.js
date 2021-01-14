const Grid = require('./Grid');
const Rover = require('./Rover');

describe('MarsRover kata', () => {
    let grid;
    let rover;

    beforeEach(() => {
        grid = new Grid();
        rover = new Rover(grid);
    });

    function expectRoverMoved(command, resultingPosition) {
        const resultPosition = rover.execute(command);
        expect(resultPosition).toEqual(resultingPosition);
    }

    describe('When rover receive a simple command at starting point (0:0:S)', () => {
        it('should turn 90° left with a L', () => {
            expectRoverMoved('L', '0:0:E');
        });
    
        it('should turn 90° rigth with a R', () => {
            expectRoverMoved('R', '0:0:O');
        });
    
        it('should move forward up rigth with a M', () => {
            expectRoverMoved('M', '0:1:S');
        });
    });
    
    describe('When we receive a command list', () => {
        it('should move the rover two cells forward', () => {
            expectRoverMoved('MM', '0:2:S');
        });

        it('should move the rover and turn it twice', () => {
            expectRoverMoved('MLMRM', '1:2:S');
        });
        
        it('should stop the rover on grid edge', () => {
            expectRoverMoved('RM', '0:0:O');
        });
    });
})
