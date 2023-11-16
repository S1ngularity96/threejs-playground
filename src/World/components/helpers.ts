import { AxesHelper, Camera, CameraHelper, DirectionalLight, DirectionalLightHelper, GridHelper } from "three";
import * as Stats from 'stats.js'
function createAxesHelper() {
    const helper = new AxesHelper(3);
    helper.position.set(-3.5, 0, -3.5)
    return helper;
}

function createGridHelper() {
    const helper = new GridHelper(6);
    helper.position.set(0, 0, 0)
    return helper;
}

function createCameraHelper(camera: Camera) {
    return new CameraHelper(camera);
}

function createDirectionalLightHelper(light: DirectionalLight) {
    return new DirectionalLightHelper(light, 1)
}

function createStatsHelper(): Stats {
    const stats = new Stats()
    document.body.appendChild(stats.dom);
    return stats;
}

export { createAxesHelper, createCameraHelper, createGridHelper, createDirectionalLightHelper, createStatsHelper }