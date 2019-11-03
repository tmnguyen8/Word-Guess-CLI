var Letter = require('./letter.js');
function Word(answer) {
    this.objArray = [];
    this.answer = answer;
    
    
    for(i of this.answer) {
        var letter = new Letter(i);
        this.objArray.push(letter);
    }
    
    var log = function () {
        var result = "";
        for (i of this.objArray) {
            result += i + " ";
        }
        console.log(answer + '\n***********************\n');
    }
    var userGuess = function(input) {
        for (i of this.objArray) {
            i.guess(input);
        }
    }

    
}
module.exports = Word;