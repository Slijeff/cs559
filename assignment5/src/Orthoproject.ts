import {Transformable} from "./Transformable";
import {mat4} from "./esm/index";
import {CanvasEvent} from "./CanvasEvent";

export class Orthoproject implements Transformable {
    trans_mat: mat4
    distance: number
    event: CanvasEvent;

    constructor() {
        this.trans_mat = mat4.create();
        this.distance = 100;
        this.event = new CanvasEvent();
        this.event.mouseWheel(this.moveDistance);
    }

    transformTo(t: Transformable): this {
        this.trans_mat = mat4.create()
        mat4.ortho(this.trans_mat, -this.distance, this.distance, -this.distance, this.distance, -1, 1)
        mat4.multiply(this.trans_mat, t.trans_mat, this.trans_mat)
        return this;
    }

    moveDistance = (value: number): void => {
        const val = value / 10;
        this.distance += val;
        mat4.ortho(this.trans_mat, -this.distance, this.distance, -this.distance, this.distance, -1, 1);
    }

}