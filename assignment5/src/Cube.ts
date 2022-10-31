import {Transformable} from "./Transformable";
import {mat4} from "./esm/index";
import {lineToTx, moveToTx} from "./utils";

// noinspection DuplicatedCode
export class Cube implements Transformable {
    trans_mat: mat4;
    context: CanvasRenderingContext2D
    scale: number

    constructor(ctx: CanvasRenderingContext2D, scale: number) {
        this.context = ctx;
        this.scale = scale;
    }

    transformTo(t: Transformable): this {
        this.trans_mat = mat4.create()
        const center = this.scale / 2
        mat4.fromTranslation(this.trans_mat, [-center, -center, -center])
        mat4.multiply(this.trans_mat, t.trans_mat, this.trans_mat)
        return this;
    }

    render() {
        this.context.fillStyle = "#0044ff"
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

        this.context.beginPath();
        moveToTx([0, 0, 0], this.trans_mat, this.context)
        lineToTx([0, 0, this.scale], this.trans_mat, this.context)
        lineToTx([0, this.scale, this.scale], this.trans_mat, this.context)
        lineToTx([0, this.scale, 0], this.trans_mat, this.context)
        lineToTx([0, 0, 0], this.trans_mat, this.context)
        this.context.fill();

        this.context.fillStyle = "#1d5aff"
        this.context.beginPath();
        moveToTx([this.scale, this.scale, this.scale], this.trans_mat, this.context)
        lineToTx([this.scale, this.scale, 0], this.trans_mat, this.context)
        lineToTx([0, this.scale, 0], this.trans_mat, this.context)
        lineToTx([0, this.scale, this.scale], this.trans_mat, this.context)
        lineToTx([this.scale, this.scale, this.scale], this.trans_mat, this.context)
        this.context.fill();

        this.context.fillStyle = "#0044ff"
        this.context.beginPath();
        moveToTx([this.scale, this.scale, this.scale], this.trans_mat, this.context)
        lineToTx([this.scale, this.scale, 0], this.trans_mat, this.context)
        lineToTx([this.scale, 0, 0], this.trans_mat, this.context)
        lineToTx([this.scale, 0, this.scale], this.trans_mat, this.context)
        lineToTx([this.scale, this.scale, this.scale], this.trans_mat, this.context)
        this.context.fill();

        this.context.fillStyle = "#1d5aff"
        this.context.beginPath();
        moveToTx([this.scale, this.scale, this.scale], this.trans_mat, this.context)
        lineToTx([0, this.scale, this.scale], this.trans_mat, this.context)
        lineToTx([0, 0, this.scale], this.trans_mat, this.context)
        lineToTx([this.scale, 0, this.scale], this.trans_mat, this.context)
        lineToTx([this.scale, this.scale, this.scale], this.trans_mat, this.context)
        this.context.fill();
    }

}