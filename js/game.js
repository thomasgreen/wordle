import Tile from "./Tile";
import words from './dictionary'
import Row from "./Row";

export default {
    guessesAllowed: 5,
    currentRowIndex: 0,
    theWord: words[Math.floor(Math.random() * words.length)],
    state: 'active',
    message: '',
    errors: false,

    letters: [
        'QWERTYUIOP'.split(''),
        'ASDFGHJKL'.split(''),
        ['Backspace', ...'ZXCVBNM'.split(''), 'Enter'],
    ],

    init() {
        this.board = Array.from({length: this.guessesAllowed}, () => new Row(Array.from({length: this.theWord.length}, (item, index) => new Tile(index))))
    },

    get currentGuess() {
        return this.currentRow.tiles.map(tile => tile.letter).join('');
    },

    get currentRow() {
        return this.board[this.currentRowIndex];
    },

    get remainingGuesses() {
        return this.guessesAllowed - this.currentRowIndex - 1;
    },

    onKeyPress(key) {
        this.message = '';
        this.errors = false;

        if (this.state === 'complete') {
            return;
        }

        if (/^[A-z]$/.test(key)) {
            this.fillTile(key)
        } else if (key === 'Enter') {
            this.submitGuess();
        } else if (key === 'Backspace') {
            this.emptyTile()
        }
    },

    fillTile(key) {
        for (let tile of this.currentRow.tiles) {
            if (tile.letter === '') {
                tile.fill(key);
                break;
            }
        }
    },

    emptyTile() {
        for (let tile of [...this.currentRow.tiles].reverse()) {
            if (tile.letter !== '') {
                tile.empty()
                break;
            }
        }
    },

    submitGuess() {
        if (this.currentGuess.length < this.theWord.length) {
            return
        }

        if (!words.includes(this.currentGuess)) {
            this.errors = true;
            return this.message = 'Not a word.'
        }

        this.currentRow.updateStatus(this.theWord)

        if (this.currentGuess === this.theWord.toLowerCase()) {
            this.state = 'complete';
            return this.message = 'You Win';
        }

        if (this.remainingGuesses === 0) {
            this.state = 'complete';
            return this.message = 'Game Over, the word was ' + this.theWord;
        }


        return this.currentRowIndex++;
    },
}
