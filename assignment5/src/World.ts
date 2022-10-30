import {Transformable} from "./Transformable";
import {mat4} from "./esm/index";
import {lineToTx, moveToTx} from "./utils";

export class World implements Transformable {
    trans_mat: mat4;
    context: CanvasRenderingContext2D;

    constructor(ctx: CanvasRenderingContext2D) {
        this.trans_mat = mat4.create()
        this.context = ctx;
    }

    renderAxes(color: string, scale) {
        let Tx = mat4.clone(this.trans_mat);
        mat4.scale(Tx, Tx, [scale, scale, scale]);

        this.context.strokeStyle = color;
        this.context.beginPath();
        // Axes
        moveToTx([1.2, 0, 0], Tx, this.context);
        lineToTx([-1.2, 0, 0], Tx, this.context);
        moveToTx([0, 0, 0], Tx, this.context);
        lineToTx([0, 1.2, 0], Tx, this.context);
        lineToTx([0, -1.2, 0], Tx, this.context);
        moveToTx([0, 0, 0], Tx, this.context);
        lineToTx([0, 0, 1.2], Tx, this.context);
        lineToTx([0, 0, -1.2], Tx, this.context);
        // Arrowheads
        moveToTx([1.1, .05, 0], Tx, this.context);
        lineToTx([1.2, 0, 0], Tx, this.context);
        lineToTx([1.1, -.05, 0], Tx, this.context);
        moveToTx([.05, 1.1, 0], Tx, this.context);
        lineToTx([0, 1.2, 0], Tx, this.context);
        lineToTx([-.05, 1.1, 0], Tx, this.context);
        moveToTx([.05, 0, 1.1], Tx, this.context);
        lineToTx([0, 0, 1.2], Tx, this.context);
        lineToTx([-.05, 0, 1.1], Tx, this.context);
        // X-label
        moveToTx([1.3, -.05, 0], Tx, this.context);
        lineToTx([1.4, .05, 0], Tx, this.context);
        moveToTx([1.3, .05, 0], Tx, this.context);
        lineToTx([1.4, -.05, 0], Tx, this.context);
        // Y-label
        moveToTx([-.05, 1.4, 0], Tx, this.context);
        lineToTx([0, 1.35, 0], Tx, this.context);
        lineToTx([.05, 1.4, 0], Tx, this.context);
        moveToTx([0, 1.35, 0], Tx, this.context);
        lineToTx([0, 1.28, 0], Tx, this.context);
        // Z-label
        moveToTx([-.05, 0, 1.3], Tx, this.context);
        lineToTx([.05, 0, 1.3], Tx, this.context);
        lineToTx([-.05, 0, 1.4], Tx, this.context);
        lineToTx([.05, 0, 1.4], Tx, this.context);

        this.context.stroke();
    }

    transformTo(t: Transformable): this {
        this.trans_mat = mat4.create()
        mat4.multiply(this.trans_mat, t.trans_mat, this.trans_mat)
        return this;
    }

}