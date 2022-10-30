import {Transformable} from "./Transformable";
import {mat4} from "./esm/index";

export class Viewport implements Transformable {
    public trans_mat: mat4;

    constructor(canvas: HTMLCanvasElement) {
        this.trans_mat = mat4.create()
        mat4.fromTranslation(this.trans_mat, [canvas.width / 2, canvas.height / 2, 0])
        // Flip y-axis
        mat4.scale(this.trans_mat, this.trans_mat, [1, -1, 1])
    }

    transformTo(t: Transformable): this {
        return this;
    }
}