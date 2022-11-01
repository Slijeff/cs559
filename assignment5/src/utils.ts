import {vec3} from "./esm/index";

export function moveToTx(loc: vec3, Tx: mat4, context: CanvasRenderingContext2D) {
    let res = vec3.create();
    vec3.transformMat4(res, loc, Tx);
    context.moveTo(res[0], res[1]);
}

export function lineToTx(loc: vec3, Tx: mat4, context: CanvasRenderingContext2D) {
    let res = vec3.create();
    vec3.transformMat4(res, loc, Tx);
    context.lineTo(res[0], res[1]);
}

export class Queue<T> {
    public storage: T[] = [];

    constructor(private capacity: number = Infinity) {
    }

    enqueue(item: T): void {
        if (this.size() <= this.capacity) {
            this.storage.push(item);
        }
    }

    dequeue(): T | undefined {
        return this.storage.shift();
    }

    size(): number {
        return this.storage.length;
    }
}