import { PerspectiveCamera, Scene, WebGLRenderer } from "three";
import { createCamera } from "./components/camera";
import { createScene } from "./components/scene";
import { createRenderer } from "./systems/renderer";
import { Resizer } from "./systems/Resizer";
import { createCube } from "./components/cube";
import { createLights } from "./components/light";

export class World {
    private container: Element | null;

    private camera: PerspectiveCamera;
    private scene: Scene;
    private renderer: WebGLRenderer;
    constructor(container: Element) {
        this.container = container;
        this.camera = createCamera();
        this.scene = createScene();

        const cube = createCube();
        cube.rotation.set(-0.5, -0.1, 0.8);

        this.scene.add(cube)
        this.scene.add(createLights());

        this.renderer = createRenderer();
        const resizer = new Resizer(container, this.camera, this.renderer);
        this.container.appendChild(this.renderer.domElement);
    }



    render() {
        requestAnimationFrame(this.render)
        this.renderer.render(this.scene, this.camera)
    }
}