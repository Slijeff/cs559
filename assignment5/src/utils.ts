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