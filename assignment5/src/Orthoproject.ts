import {Transformable} from "./Transformable";
import {mat4} from "./esm/index";

export class Orthoproject implements Transformable {
    trans_mat: mat4;

    constructor() {
        this.trans_mat = mat4.create();
    }

    transformTo(t: Transformable): this {
        this.trans_mat = mat4.create()
        mat4.ortho(this.trans_mat, -100, 100, -100, 100, -1, 1)
        mat4.multiply(this.trans_mat, t.trans_mat, this.trans_mat)
        return this;
    }

}