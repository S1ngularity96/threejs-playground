import { Color, Group, Scene, WebGLRenderer } from "three";
import { POVCamera } from "./components/camera";
import { createScene } from "./components/scene";
import { createRenderer } from "./systems/renderer";
import { Resizer } from "./systems/Resizer";
import { Cube } from "./components/cube";
import { Flex } from "./systems/Flex";
import { Loop } from "./systems/Loop";
import { Controls } from "./components/controls";
import { Light } from "./components/light";
import { createAxesHelper, createGridHelper, createStatsHelper } from "./components/helpers";

export class World {
    private container: Element | null;
    private camera: POVCamera;
    private scene: Scene;
    private renderer: WebGLRenderer;
    private loop: Loop;
    constructor(container: Element) {
        this.renderer = createRenderer();
        this.container = container;
        const cameraLight = new Light(Color.NAMES.white, 1);
        
        this.camera = new POVCamera();
        this.camera.position.set(0, 5, 10);
        this.camera.attachDirectionalLight(cameraLight)
        const controls = new Controls(this.camera, this.renderer.domElement);
        controls.configure(true, 0.2)
        new Resizer(container, this.camera, this.renderer);
        
        this.scene = createScene();
        this.scene.add(this.camera);
        
        const cube = new Cube({ width: 2, height: 2, depth: 2 })
        cube.rotation.set(0, 0.5, 0)
        this.scene.add(cube);
        
        this.loop = new Loop(this.camera, this.scene, this.renderer, createStatsHelper());
        this.loop.addUpdatable([controls, this.camera, cube]);
        this.addHelper()
        this.container.appendChild(this.renderer.domElement);
    }

    addHelper() {
        this.scene.add(createGridHelper())
        this.scene.add(createAxesHelper())
    }

    render() {
        this.renderer.render(this.scene, this.camera);
    }

    start() {
        this.loop.start();
    }

    stop() {
        this.loop.stop();
    }
}