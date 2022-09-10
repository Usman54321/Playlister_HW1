import jsTPS_Transaction from "../../common/jsTPS.js"

export default class EditSong_Transaction extends jsTPS_Transaction {
    constructor(initModel, index, initNewSong) {
        super();
        this.model = initModel;
        this.index = index;
        this.oldSong = this.model.currentList.songs[index];
        this.newSong = initNewSong;
    }

    doTransaction() {
        this.model.editSong(this.index, this.newSong);
    }

    undoTransaction() {
        this.model.editSong(this.index, this.oldSong);
    }
}