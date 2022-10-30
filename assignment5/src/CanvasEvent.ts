import {get2dCanvas, getCursorPosition} from "../../lib/utils";
import {vec2} from "./esm/index";

export class CanvasEvent {
    prev: vec2
    curr: vec2
    down: boolean
    inside: boolean
    canvas: HTMLCanvasElement

    constructor() {
        const {canvas, ctx} = get2dCanvas()
        this.canvas = canvas;
        canvas.addEventListener('mouseover', (ev) => {
            this.inside = true;
            this.curr = getCursorPosition(canvas, ev);
        })
        canvas.addEventListener('mouseout', () => {
            this.inside = false;
            this.down = false;
        })
        canvas.addEventListener('mousedown', () => {
            this.down = true;
        })
        canvas.addEventListener('mouseup', () => {
            this.down = false;
        })
    }

    mouseDrag(callback: (offset: vec2) => void) {
        this.canvas.addEventListener('mousemove', (ev) => {
            this.prev = this.curr;
            this.curr = getCursorPosition(this.canvas, ev);
            if (this.down && this.inside) {
                let res = vec2.create();
                vec2.sub(res, this.curr, this.prev);
                callback(res);
            }
        })
    }

    mouseWheel(callback: (value: number) => void) {
        this.canvas.addEventListener('wheel', (ev) => {
            ev.preventDefault();
            if (this.inside) {
                callback(ev.deltaY);
            }
        })
    }

    private logStates() {
        console.log('down: ', this.down, 'inside: ', this.inside, 'curr: ', this.curr);
    }
}