var Letter = require('./letter.js');
class Word {
    constructor (answer) {
        this.objArray = [];
        this.answer = answer;
    }
    runThis () {
        for (i of this.answer) {
            var letter = new Letter(i);
            this.objArray.push(letter);
        }
    }
    runThis()

    log () {
        var result = "";
        for (i of this.objArray) {
            result += i + " ";
        }
        console.log(answer + '\n***********************\n');
    }
    userGuess (input) {
        for (i of this.objArray) {
            i.guess(input);
        }
    }

    
}
module.exports = Word;