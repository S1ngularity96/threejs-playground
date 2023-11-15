import { Camera, Object3D } from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";
import { ITick } from "../interfaces/ITick";

class Controls implements ITick {
    private controls: OrbitControls;
    constructor(camera: Camera, domElement: HTMLElement) {
        this.controls = new OrbitControls(camera, domElement)
    }

    configure(enableDamping: boolean, dampingFactor: number = 0.1, target?: Object3D) {
        this.controls.enableDamping = enableDamping;
        this.controls.enablePan = true;
        this.controls.dampingFactor = dampingFactor
        if (target)
            this.controls.target = target.position;
    }

    get() {
        return this.controls;
    }

    tick(delta: number) {
        this.controls.update(delta);
    }
}


export { Controls }