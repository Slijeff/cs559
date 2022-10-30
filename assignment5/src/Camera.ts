import {Transformable} from "./Transformable";
import {mat4, vec3} from "./esm/index";
import {CanvasEvent} from "./CanvasEvent";

export class Camera implements Transformable {
    trans_mat: mat4;
    event: CanvasEvent;
    eye: vec3;
    target: vec3;
    up: vec3;

    constructor() {
        this.trans_mat = mat4.create()
        this.eye = vec3.fromValues(20, 20, 30)
        this.target = vec3.fromValues(0, 0, 0)
        this.up = vec3.fromValues(0, 1, 0)
        mat4.lookAt(this.trans_mat, this.eye, this.target, this.up)
        this.event = new CanvasEvent();
        this.event.mouseDrag(this.moveEye);
    }

    transformTo(t: Transformable): this {
        this.trans_mat = mat4.create()
        mat4.lookAt(this.trans_mat, this.eye, this.target, this.up)
        mat4.multiply(this.trans_mat, t.trans_mat, this.trans_mat);
        return this;
    }

    inLimit(val: number) {
        return (this.eye[0] + -val / 10 >= 0)
    }

    moveEye = (offset: vec2) => {
        this.eye[0] = this.inLimit(offset[0]) ? this.eye[0] + -offset[0] / 10 : this.eye[0];
        this.eye[1] = this.inLimit(offset[1]) ? this.eye[1] + -offset[1] / 10 : this.eye[1];
        mat4.lookAt(this.trans_mat, this.eye, this.target, this.up);
    }

}