import {Transformable} from "./Transformable";
import {mat4} from "./esm/index";
import {lineToTx, moveToTx} from "./utils";

// noinspection DuplicatedCode
export class Cube implements Transformable {
    trans_mat: mat4;
    context: CanvasRenderingContext2D;
    scale: number;
    location: vec3;
    deg: number;
    speed: number;

    constructor(ctx: CanvasRenderingContext2D,
                scale: number,
                location: vec3,
                rotate: boolean = false,
                speed: number = 0.2
    ) {
        this.context = ctx;
        this.scale = scale;
        this.location = location;
        this.deg = rotate ? 1 : 0;
        this.speed = speed;
    }

    transformTo(t: Transformable): this {
        this.trans_mat = mat4.create()
        const rad = this.deg * Math.PI / 180
        mat4.fromTranslation(this.trans_mat, this.location)
        mat4.rotate(this.trans_mat, this.trans_mat, rad, [1, 1, 1])
        mat4.multiply(this.trans_mat, t.trans_mat, this.trans_mat)
        return this;
    }

    render() {
        this.context.fillStyle = "rgba(0, 68, 255)"
        this.context.beginPath();
        moveToTx([0, 0, 0], this.trans_mat, this.context)
        lineToTx([this.scale, 0, 0], this.trans_mat, this.context)
        lineToTx([this.scale, 0, this.scale], this.trans_mat, this.context)
        lineToTx([0, 0, this.scale], this.trans_mat, this.context)
        lineToTx([0, 0, 0], this.trans_mat, this.context)
        this.context.fill();

        this.context.beginPath();
        moveToTx([0, 0, 0], this.trans_mat, this.context)
        lineToTx([this.scale, 0, 0], this.trans_mat, this.context)
        lineToTx([this.scale, this.scale, 0], this.trans_mat, this.context)
        lineToTx([0, this.scale, 0], this.trans_mat, this.context)
        lineToTx([0, 0, 0], this.trans_mat, this.context)
        this.context.fill();

        this.context.fillStyle = "rgba(29, 90, 255)"
        this.context.beginPath();
        moveToTx([0, 0, 0], this.trans_mat, this.context)
        lineToTx([0, 0, this.scale], this.trans_mat, this.context)
        lineToTx([0, this.scale, this.scale], this.trans_mat, this.context)
        lineToTx([0, this.scale, 0], this.trans_mat, this.context)
        lineToTx([0, 0, 0], this.trans_mat, this.context)
        this.context.fill();

        this.context.beginPath();
        moveToTx([this.scale, this.scale, this.scale], this.trans_mat, this.context)
        lineToTx([this.scale, this.scale, 0], this.trans_mat, this.context)
        lineToTx([0, this.scale, 0], this.trans_mat, this.context)
        lineToTx([0, this.scale, this.scale], this.trans_mat, this.context)
        lineToTx([this.scale, this.scale, this.scale], this.trans_mat, this.context)
        this.context.fill();

        this.context.fillStyle = "rgba(0, 68, 255)"
        this.context.beginPath();
        moveToTx([this.scale, this.scale, this.scale], this.trans_mat, this.context)
        lineToTx([this.scale, this.scale, 0], this.trans_mat, this.context)
        lineToTx([this.scale, 0, 0], this.trans_mat, this.context)
        lineToTx([this.scale, 0, this.scale], this.trans_mat, this.context)
        lineToTx([this.scale, this.scale, this.scale], this.trans_mat, this.context)
        this.context.fill();

        this.context.fillStyle = "rgba(29, 90, 255)"
        this.context.beginPath();
        moveToTx([this.scale, this.scale, this.scale], this.trans_mat, this.context)
        lineToTx([0, this.scale, this.scale], this.trans_mat, this.context)
        lineToTx([0, 0, this.scale], this.trans_mat, this.context)
        lineToTx([this.scale, 0, this.scale], this.trans_mat, this.context)
        lineToTx([this.scale, this.scale, this.scale], this.trans_mat, this.context)
        this.context.fill();

        if (this.deg !== 0) {
            this.deg = (this.deg + this.speed) % 360
        }
    }

}