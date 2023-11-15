import { DirectionalLight } from "three";

function createLight() {

    const mainLight = new DirectionalLight('yellow', 1.5);
    mainLight.position.set(20, 20, 20);

    return { mainLight };
}

export { createLight };