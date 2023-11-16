import { BoxGeometry, MathUtils, Mesh, MeshStandardMaterial, Object3DEventMap, Texture, TextureLoader } from "three";
import { ITick } from "../interfaces/ITick";
import { IControls } from "../interfaces/IControls";
import GUI from "three/examples/jsm/libs/lil-gui.module.min.js";

type TextureType = "BW" | "COL"

function getMaterial() {
    const texture = getTexture("BW");
    const material = new MeshStandardMaterial({ map: texture })
    material.userData = { texType: "BW" }
    return material;
}

function getTexture(type: TextureType) {
    const tloader = new TextureLoader();

    const bw = tloader.load(`/assets/textures/uv-test-${type.toLowerCase()}.png`)
    return bw;
}

class Cube extends Mesh<BoxGeometry, MeshStandardMaterial, Object3DEventMap> implements ITick, IControls {
    public settings: { degPerSecond: number, rotate: boolean, texture: TextureType } = {
        degPerSecond: 30,
        rotate: false,
        texture: "BW"
    }


    constructor({ width, height, depth }: { width: number, height: number, depth: number }) {

        super(new BoxGeometry(width, height, depth), getMaterial())
    }

    appendFolderWithControls(gui: GUI, folderName: string) {
        const cubeFolder = gui.addFolder(folderName)
        cubeFolder.add(this.settings, 'rotate')
        cubeFolder.add(this.settings, 'degPerSecond', 1, 360, 1)
        cubeFolder.add(this.settings, 'texture', ["BW", "COL"])
        return cubeFolder;
    }

    tick(delta: number) {
        if (this.settings.rotate) {
            this.rotation.y += MathUtils.degToRad(this.settings.degPerSecond) * delta;
        }

        if (this.settings.texture !== this.material.userData.texType) {
            this.material.userData.texType = this.settings.texture;
            this.material.map = getTexture(this.settings.texture);
        }
    }
}

export { Cube };

