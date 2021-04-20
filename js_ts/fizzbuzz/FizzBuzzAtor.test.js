const FizzBuzzAtor = require('./FizzBuzzAtor')

describe('FizzBuzzAtor', () => {

    let fizzBuzzAtor;

    beforeEach(() => {
        fizzBuzzAtor = new FizzBuzzAtor();
    });

    describe('when value is containing a 3', () => {
        it.each([23, 83])(`should convert "%s" to Fizz`, (value) => {
            expect(fizzBuzzAtor.convert(value)).toEqual('Fizz');
        });
    });

    describe('when value is a multiple of 3', () => {
        it.each([6, 9, 42])(`should convert "%s" to Fizz`, (value) => {
            expect(fizzBuzzAtor.convert(value)).toEqual('Fizz');
        });
    });

    describe('when value is a multiple of 3 and is containing a 3', () => {
        it.each([3, 33, 63])(`should convert "%s" to FizzFizz`, (value) => {
            expect(fizzBuzzAtor.convert(value)).toEqual('FizzFizz');
        });
    });

    describe('when value is containing a 5', () => {
        it.each([52, 58])(`should convert "%s" to Buzz`, (value) => {
            expect(fizzBuzzAtor.convert(value)).toEqual('Buzz');
        });
    });

    describe('when value is multiple of 5', () => {
        it.each([10, 70, 80])(`should convert "%s" to Buzz`, (value) => {
            expect(fizzBuzzAtor.convert(value)).toEqual('Buzz');
        });
    });

    describe('when valie is multiple of 5 and is containing a 5', () => {
        it.each([5, 50, 55])(`should convert "%s" to BuzzBuzz`, (value) => {
            expect(fizzBuzzAtor.convert(value)).toEqual('BuzzBuzz');
        });
    
    });

    describe('when value is multiple of 15', () => {
        it.each([60 ,90])('should convert "%s" to FizzBuzz', (value) => {
            expect(fizzBuzzAtor.convert(value)).toEqual('FizzBuzz');
        });
    });

    describe('when value is multiple of 15 and is containing a 3', () => {
        it.each([30])('should convert "%s" to FizzBuzzFizz', (value) => {
            expect(fizzBuzzAtor.convert(value)).toEqual('FizzBuzzFizz');
        });
    });

    describe('when value is multiple of 15 and is containing a 5', () => {
        it.each([45])('should convert "%s" to FizzBuzzBuzz', (value) => {
            expect(fizzBuzzAtor.convert(value)).toEqual('FizzBuzzBuzz');
        });
    });

    describe('when value is not a mutiple of 3, 5 and 15', () => {
        describe('when value is not containing 3 or 5', () => {
            it.each([1, 2, 8, 98])('should not convert "%s"', (value) => {
                expect(fizzBuzzAtor.convert(value)).toEqual(value);
            });
        });
    });
});