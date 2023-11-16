import { BoxGeometry, MathUtils, Mesh, MeshPhongMaterial, MeshStandardMaterial, Object3DEventMap, TextureLoader } from "three";
import { ITick } from "../interfaces/ITick";

function getMaterial() {
    const tloader = new TextureLoader();
    const texture = tloader.load('/assets/textures/uv-test-bw.png');
    new MeshPhongMaterial({})
    const material = new MeshStandardMaterial({ map: texture})
    return material;
}

class Cube extends Mesh<BoxGeometry, MeshStandardMaterial, Object3DEventMap> implements ITick {
    private radiansPerSecond = MathUtils.degToRad(30);
    constructor({ width, height, depth }: { width: number, height: number, depth: number }) {
        super(new BoxGeometry(width, height, depth), getMaterial())
    }

    tick(delta: number) {
        this.rotation.y += this.radiansPerSecond * delta;
    }
}

export { Cube };

