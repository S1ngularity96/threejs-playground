import { Object3D, PerspectiveCamera } from "three";
import { ITick } from "../interfaces/ITick";
import { Light } from "./light";


class POVCamera extends PerspectiveCamera implements ITick {

    public light: Light | undefined;
    constructor() {
        super(50)
    }

    attachDirectionalLight(light: Light, target?: Object3D) {
        this.light = light;
        if (target) {
            light.target = target;
        }
        
        this.add(this.light);
    }

    tick(delta: number): void {
    }

}


export { POVCamera }