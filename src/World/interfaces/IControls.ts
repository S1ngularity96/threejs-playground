import GUI from "three/examples/jsm/libs/lil-gui.module.min.js";

export interface IControls {
    appendFolderWithControls: (gui: GUI, folderName: string) => GUI;
}