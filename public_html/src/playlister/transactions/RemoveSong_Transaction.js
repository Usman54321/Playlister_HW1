import jsTPS_Transaction from "../../common/jsTPS.js"

export default class RemoveSong_Transaction extends jsTPS_Transaction {
    constructor(initModel, initIndex) {
        super();
        this.model = initModel;
        this.index = initIndex;
    }

    doTransaction() {
        this.removedSong = this.model.removeSong(this.index);
    }

    undoTransaction() {
        this.model.currentList.songs.splice(this.index, 0, this.removedSong);
        this.model.saveLists();
        this.model.view.refreshPlaylist(this.model.currentList);
    }
}