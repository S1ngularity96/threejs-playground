import { BoxGeometry, Mesh, MeshStandardMaterial } from "three";

function createCube() {
    const geometry = new BoxGeometry(2, 2, 2);
    const material = new MeshStandardMaterial({color: 'purple'})
    return new Mesh(geometry, material);
}

export { createCube };

