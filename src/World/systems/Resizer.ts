import { PerspectiveCamera, WebGLRenderer } from "three";

function setSize(container: Element, camera: PerspectiveCamera, renderer: WebGLRenderer) {
    camera.aspect = container.clientWidth / container.clientHeight;
    // update the camera's frustum
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio * 2);
}

class Resizer {
    constructor(container: Element, camera: PerspectiveCamera, renderer: WebGLRenderer) {
        setSize(container, camera, renderer);

        window.addEventListener("resize", () => {
            setSize(container, camera, renderer);
            this.onResize();
        })
    }

    public onResize() { }
}

export { Resizer }