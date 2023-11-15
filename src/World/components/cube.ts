import { BoxGeometry, MathUtils, Mesh, MeshStandardMaterial, Object3DEventMap, TextureLoader } from "three";
import { ITick } from "../interfaces/ITick";

class Cube implements ITick {
    private cube: Mesh<BoxGeometry, MeshStandardMaterial, Object3DEventMap>;
    private radiansPerSecond = MathUtils.degToRad(30);
    constructor({ width, height, depth }: { width: number, height: number, depth: number }) {
        const geometry = new BoxGeometry(width, height, depth);
        const material = this.getMaterial()
        this.cube = new Mesh(geometry, material);
    }

    private getMaterial() {
        const tloader = new TextureLoader();
        const texture = tloader.load('/assets/textures/uv-test-col.png');
        const material = new MeshStandardMaterial({ map: texture })
        return material;
    }

    get() {
        return this.cube;
    }

    tick(delta: number) {
        this.cube.rotation.z += this.radiansPerSecond * delta;
        this.cube.rotation.x += this.radiansPerSecond * delta;
        this.cube.rotation.y += this.radiansPerSecond * delta;
    }
}

export { Cube };

