const FizzBuzzAtor = require('./FizzBuzzAtor');

const fizzBuzzAtor = new FizzBuzzAtor();

for (i = 1; i <= 100; i++ ) {
    console.log(fizzBuzzAtor.convert(i));
}