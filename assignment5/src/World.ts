import {Transformable} from "./Transformable";
import {mat4} from "./esm/index";
import {lineToTx, moveToTx} from "./utils";
import {Cube} from "./Cube";

export class World implements Transformable {
    trans_mat: mat4;
    context: CanvasRenderingContext2D;
    scale: number

    constructor(ctx: CanvasRenderingContext2D, scale: number) {
        this.trans_mat = mat4.create()
        this.context = ctx;
        this.scale = scale;
    }

    renderAxes(color: string) {

        this.context.strokeStyle = color;
        this.context.beginPath();
        // Axes
        moveToTx([1.2, 0, 0], this.trans_mat, this.context);
        lineToTx([-1.2, 0, 0], this.trans_mat, this.context);
        moveToTx([0, 0, 0], this.trans_mat, this.context);
        lineToTx([0, 1.2, 0], this.trans_mat, this.context);
        lineToTx([0, -1.2, 0], this.trans_mat, this.context);
        moveToTx([0, 0, 0], this.trans_mat, this.context);
        lineToTx([0, 0, 1.2], this.trans_mat, this.context);
        lineToTx([0, 0, -1.2], this.trans_mat, this.context);
        // Arrowheads
        moveToTx([1.1, .05, 0], this.trans_mat, this.context);
        lineToTx([1.2, 0, 0], this.trans_mat, this.context);
        lineToTx([1.1, -.05, 0], this.trans_mat, this.context);
        moveToTx([.05, 1.1, 0], this.trans_mat, this.context);
        lineToTx([0, 1.2, 0], this.trans_mat, this.context);
        lineToTx([-.05, 1.1, 0], this.trans_mat, this.context);
        moveToTx([.05, 0, 1.1], this.trans_mat, this.context);
        lineToTx([0, 0, 1.2], this.trans_mat, this.context);
        lineToTx([-.05, 0, 1.1], this.trans_mat, this.context);
        // X-label
        moveToTx([1.3, -.05, 0], this.trans_mat, this.context);
        lineToTx([1.4, .05, 0], this.trans_mat, this.context);
        moveToTx([1.3, .05, 0], this.trans_mat, this.context);
        lineToTx([1.4, -.05, 0], this.trans_mat, this.context);
        // Y-label
        moveToTx([-.05, 1.4, 0], this.trans_mat, this.context);
        lineToTx([0, 1.35, 0], this.trans_mat, this.context);
        lineToTx([.05, 1.4, 0], this.trans_mat, this.context);
        moveToTx([0, 1.35, 0], this.trans_mat, this.context);
        lineToTx([0, 1.28, 0], this.trans_mat, this.context);
        // Z-label
        moveToTx([-.05, 0, 1.3], this.trans_mat, this.context);
        lineToTx([.05, 0, 1.3], this.trans_mat, this.context);
        lineToTx([-.05, 0, 1.4], this.trans_mat, this.context);
        lineToTx([.05, 0, 1.4], this.trans_mat, this.context);

        this.context.stroke();
    }

    renderCubeTrace(t: Cube) {
        this.context.strokeStyle = `rgba(${t.rgb_color[0]}, ${t.rgb_color[1]}, ${t.rgb_color[2]})`
        this.context.beginPath();
        for (let i = 0; i < t.prev_mat_queue.size(); i++) {
            lineToTx([0, 0, 0], t.prev_mat_queue.storage[i], this.context);
        }
        this.context.stroke();
        if (t.prev_mat_queue.size() >= 30) {
            t.prev_mat_queue.dequeue();
        }

    }

    transformTo(t: Transformable): this {
        this.trans_mat = mat4.create()
        mat4.scale(this.trans_mat, this.trans_mat, [this.scale, this.scale, this.scale]);
        mat4.multiply(this.trans_mat, t.trans_mat, this.trans_mat)
        return this;
    }

}