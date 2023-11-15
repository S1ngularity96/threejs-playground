import { Object3D, PerspectiveCamera } from "three";
import { ITick } from "../interfaces/ITick";
import { Light } from "./light";
import { createDirectionalLightHelper } from "./helpers";


class POVCamera extends PerspectiveCamera implements ITick {

    private light: Light | undefined;
    constructor() {
        super(50, 1, 0.1, 100)
    }

    attachDirectionalLight(light: Light, target?: Object3D) {
        this.light = light;

        if (target) {
            light.target = target;
        }
        this.add(createDirectionalLightHelper(light))
        this.add(this.light);
    }

    tick(delta: number): void {
    }

}


export { POVCamera }