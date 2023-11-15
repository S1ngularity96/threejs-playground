import { Color, Scene, WebGLRenderer } from "three";
import { POVCamera } from "./components/camera";
import { createScene } from "./components/scene";
import { createRenderer } from "./systems/renderer";
import { Resizer } from "./systems/Resizer";
import { Cube } from "./components/cube";
import { Flex } from "./systems/Flex";
import { Loop } from "./systems/Loop";
import { Controls } from "./components/controls";
import { createLight } from "./components/light";
import { createAxesHelper, createCameraHelper, createDirectionalLightHelper, createGridHelper } from "./components/helpers";

export class World {
    private container: Element | null;

    private camera: POVCamera;
    private scene: Scene;
    private renderer: WebGLRenderer;
    private loop: Loop;
    constructor(container: Element) {
        this.container = container;
        this.camera = new POVCamera();

        this.scene = createScene();

        const cubes = [new Cube({ width: 2, height: 2, depth: 2 })]
        this.camera.attachDirectionalLight()
        Flex.row(cubes.map(cube => cube.get()), 3)
        cubes.map(cube => cube.get()).forEach(cube => {
            cube.rotation.set(0, 0.5, 0)
            this.scene.add(cube);
        })

        const { mainLight } = createLight();
        //this.scene.add(mainLight)

        this.renderer = createRenderer();
        new Resizer(container, this.camera.get(), this.renderer);
        this.loop = new Loop(this.camera.get(), this.scene, this.renderer);
        const controls = new Controls(this.camera.get(), this.renderer.domElement);
        controls.configure(true, 0.1, cubes[0].get())
        this.loop.addUpdatable([controls, this.camera]);
        this.scene.add(createGridHelper())
        this.scene.add(createAxesHelper())
        this.scene.add(createDirectionalLightHelper(mainLight))
        if (this.camera.light) {
            this.scene.add(createDirectionalLightHelper(this.camera.light))
        }
        this.container.appendChild(this.renderer.domElement);
    }

    render() {
        this.renderer.render(this.scene, this.camera.get());
    }

    start() {
        this.loop.start();
    }

    stop() {
        this.loop.stop();
    }
}