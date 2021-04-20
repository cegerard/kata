class FizzBuzzAtor {

    static FIZZBUZZ = 'FizzBuzz';
    static FIZZ = 'Fizz';
    static BUZZ = 'Buzz';

    convert(value) {
        const convertedMultiple = this.convertMutipleOf(value);
        const convertedContain = this.convertedContain(value);
        const convertedValue = convertedMultiple + convertedContain;

        return convertedValue === '' ? value : convertedValue;
    }

    private

    convertMutipleOf(value) {
        if(this.isMultipleOf(value, 15)) {
            return FizzBuzzAtor.FIZZBUZZ;
        } 
        
        if(this.isMultipleOf(value, 3)) {
            return  FizzBuzzAtor.FIZZ;
        } 
        
        if(this.isMultipleOf(value, 5)) {
            return  FizzBuzzAtor.BUZZ;
        }

        return '';
    }

    convertedContain(value) {
        if(this.contains(value, 3)) {
            return FizzBuzzAtor.FIZZ;
        }

        if(this.contains(value, 5)) {
            return FizzBuzzAtor.BUZZ;
        }

        return '';
    }

    isMultipleOf(value, base) {
        return value % base === 0
    }

    contains(value, num) {
        return String(value).includes(num);
    }
}

module.exports = FizzBuzzAtor