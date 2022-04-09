export default class Row {
    constructor(tiles) {
        this.tiles = tiles;
    }

    tiles = [];


    updateStatus(theWord) {
        for (let tile of this.tiles) {
            tile.updateStatus(theWord)
        }


        this.tiles.filter(t => t.status === 'present').forEach(tile => {
            if (this.tiles.some(t => t.letter === tile.letter && t.status === 'correct')) {
                tile.status = 'absent';
            }
        })


    }
}
