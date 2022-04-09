export default class Tile {
    constructor(index) {
        this.position = index;
    }

    letter = '';
    status = '';
    position = 0;

    fill(key) {
        this.letter = key.toLowerCase();
    }

    empty() {
        this.letter = '';
    }

    updateStatus(theWord) {
        if (! theWord.includes(this.letter)) {
            return this.status = 'absent';
        }

        if (this.letter === theWord[this.position]) {
            return this.status = 'correct';
        }

        this.status = 'present';
    }
}
