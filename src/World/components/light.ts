import { Color, ColorRepresentation, DirectionalLight } from "three";
import { ITick } from "../interfaces/ITick";
import { IControls } from "../interfaces/IControls";
import GUI from "three/examples/jsm/libs/lil-gui.module.min.js";

class Light extends DirectionalLight implements ITick, IControls {
    constructor(color?: ColorRepresentation | undefined, intensity?: number | undefined) {
        super(color, intensity);
    }

    appendFolderWithControls(gui: GUI, folderName: string) {
        const folder = gui.addFolder(folderName)
        folder.add((this as Light), 'intensity', 1, 10, 1);
        return folder;
    }

    tick(delta: number) { }

}

export { Light };