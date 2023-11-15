import { World } from './World';
import './style.css'

const container = document.querySelector('#app');
if (container !== null) {
    const world = new World(container);
    world.start();
    //world.render();
    
} else {
    alert("Container with name #app does not exist")
}