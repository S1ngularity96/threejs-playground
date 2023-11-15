import { Mesh } from "three";

class Flex {
    static row(items: Array<Mesh>, gap: number = 0, justify: "start" | "center" | "end" = "start") {
        items.forEach((item, index) => {
            item.position.set(index * gap, 0, 0);
        })
    }
}

export { Flex }