class Letter {
    constructor (letter) {
        this.letter = letter;
        this.guessed = false;
    }
    toString() {
        if (this.letter === "") {
            this.guessed = true;
        } else {
            if (this.guessed === false) {
                return "_";
            } else {
                return this.letter;
            }
        }
    }
    guess(guess) {
        if (guess === this.letter) {
            this.guessed = true;
        }
    }
}

module.exports = Letter;