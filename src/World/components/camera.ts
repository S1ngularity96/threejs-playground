import { DirectionalLight, MathUtils, Object3D, PerspectiveCamera, SpotLight } from "three";
import { ITick } from "../interfaces/ITick";
import { createLight } from "./light";


class POVCamera implements ITick {
    private camera: PerspectiveCamera;
    public light: DirectionalLight | undefined;
    constructor() {
        this.camera = new PerspectiveCamera(50, 1, 0.1, 100);
        this.camera.position.set(0, 10, 10);
    }

    attachDirectionalLight(target?: Object3D) {

        this.light = createLight().mainLight;
        this.light.position.set(0, 0, -2)

        this.light.intensity = 10;
        this.camera.add(this.light);
    }

    get(): PerspectiveCamera {
        return this.camera;
    }

    tick(delta: number): void {
        
    }

}


export { POVCamera }