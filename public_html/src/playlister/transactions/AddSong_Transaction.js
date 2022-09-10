import jsTPS_Transaction from "../../common/jsTPS.js"

export default class AddSong_Transaction extends jsTPS_Transaction {
    constructor(initModel) {
        super();
        this.model = initModel;
    }

    doTransaction() {
        this.model.addSong();
    }

    undoTransaction() {
        this.model.removeSong(this.model.currentList.songs.length - 1);
    }
}