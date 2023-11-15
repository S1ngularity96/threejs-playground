import { Color, ColorRepresentation, DirectionalLight } from "three";
import { ITick } from "../interfaces/ITick";

class Light extends DirectionalLight implements ITick {
    constructor(color?: ColorRepresentation | undefined, intensity?: number | undefined) {
        super(color, intensity);
    }

    tick(delta: number) { }

}

export { Light };