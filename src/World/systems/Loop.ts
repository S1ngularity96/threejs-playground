import { Clock, PerspectiveCamera, Scene, WebGLRenderer } from "three"
import { ITick } from "../interfaces/ITick";




class Loop {
    private camera: PerspectiveCamera;
    private scene: Scene;
    private renderer: WebGLRenderer;
    private updatables: Array<ITick> = [];
    private clock: Clock;
    constructor(camera: PerspectiveCamera, scene: Scene, renderer: WebGLRenderer) {
        this.camera = camera;
        this.scene = scene;
        this.renderer = renderer;
        this.clock = new Clock();
    }

    addUpdatable(updatable: Iterable<ITick>) {
        this.updatables.push(...updatable);
    }

    start() {
        this.renderer.setAnimationLoop(() => {
            this.tick()
            this.renderer.render(this.scene, this.camera);
        })
    }
    stop() {
        this.clock.stop();
        this.renderer.setAnimationLoop(null);
    }

    tick() {
        const delta = this.clock.getDelta();
        this.updatables.forEach((value) => value.tick(delta))
    }
}

export { Loop }