import {Transformable} from "./Transformable";
import {mat4} from "./esm/index";

export class Perspectiveproject implements Transformable {
    trans_mat: mat4;
    canvas: HTMLCanvasElement;

    constructor(canvas: HTMLCanvasElement) {
        this.trans_mat = mat4.create();
        this.canvas = canvas;
    }


    transformTo(t: Transformable): this {
        mat4.perspective(this.trans_mat, 3 * Math.PI / 180, 1, -1, null);
        mat4.multiply(this.trans_mat, t.trans_mat, this.trans_mat);
        return this;
    }

}