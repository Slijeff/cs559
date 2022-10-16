import {vec2} from "./esm/index";
import {getCursorPosition} from "../../lib/utils";

export default class Curve {
    private points: number[][];
    private hermit_points: number[][][];
    private render_p: number[][];
    private curr_p: vec2;
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private isMouseDown: boolean;
    private counter: number;
    private prog: HTMLParagraphElement;
    private place: HTMLButtonElement;
    private render_skip: number = 8;
    private readonly interval: number = 0.01;
    private sample_skip: number = 3;

    constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
        this.points = [];
        this.hermit_points = [];
        this.render_p = [];
        this.canvas = canvas;
        this.ctx = ctx;
        this.counter = 0;
        this.prog = document.querySelector('#progress') as HTMLParagraphElement;
        this.place = document.querySelector('#animate') as HTMLButtonElement;
        this.place.disabled = true;
        this.init();
    }

    public updateAndRender(ev: MouseEvent) {
        const {x, y} = getCursorPosition(this.canvas, ev);
        this.curr_p = [x, y];
        if (this.counter % this.sample_skip == 0) {
            this.points.push([x, y])
        }
        this.counter = (this.counter + 1) % 100;
        this.renderCrude();
    }

    private hermit_basis(t: number, P: vec2[]) {
        const basis = [
            2 * t * t * t - 3 * t * t + 1,
            t * t * t - 2 * t * t + t,
            -2 * t * t * t + 3 * t * t,
            t * t * t - t * t
        ];
        let result = vec2.create();
        vec2.scale(result, P[0], basis[0]);
        vec2.scaleAndAdd(result, result, P[1], basis[1]);
        vec2.scaleAndAdd(result, result, P[2], basis[2]);
        vec2.scaleAndAdd(result, result, P[3], basis[3]);
        return result;
    }

    private init() {
        this.canvas.addEventListener('mouseout', () => {
            if (this.isMouseDown) {
                this.isMouseDown = false;
                this.ctx.beginPath();
                this.calculateCurve();
                this.renderHermit();
            }
        })
        this.canvas.addEventListener('mousedown', () => {
            this.isMouseDown = true;
            this.place.disabled = true;
            // this.points = [];
            // this.hermit_points = [];
            this.clear();
        })

        this.canvas.addEventListener('mouseup', () => {
            this.isMouseDown = false;
            this.place.disabled = false;
            this.ctx.beginPath();
            this.calculateCurve();
            this.renderHermit();
        })

        this.canvas.addEventListener('mousemove', (ev: MouseEvent) => {
            if (this.isMouseDown) {
                this.updateAndRender(ev);
            }
        })

        const clear_btn = document.querySelector('#clear') as HTMLButtonElement;
        clear_btn.addEventListener('click', () => {
            this.clear()
        })

        this.place.addEventListener('click', () => {
            this.animateObject(0);
        })

        const skip_slider = document.querySelector('#sample') as HTMLInputElement;
        skip_slider.addEventListener('change', (ev) => {
            this.sample_skip = Number.parseInt((ev.target as HTMLInputElement).value);
        })

        const render_skip_btn = document.querySelector('#render') as HTMLInputElement;
        render_skip_btn.addEventListener('change', (ev) => {
            this.render_skip = Number.parseInt((ev.target as HTMLInputElement).value);
        })
    }

    private calculateCurve() {
        console.log("sample length: ", this.points.length);
        for (let i = 0; i < this.points.length - 2; i++) {
            let p1 = this.points[i];
            let p2 = this.points[i + 1];
            let p3 = this.points[i + 2];
            let d1 = [p2[0] - p1[0], p2[1] - p1[1]];
            let d2 = [p3[0] - p2[0], p3[1] - p2[1]];
            this.hermit_points.push([p1, d1, p2, d2]);
        }
    }

    private clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.points = [];
        this.hermit_points = [];
        this.place.disabled = true;
        this.render_p = [];
    }

    private animateObject(i: number) {
        // console.log(this.render_p);
        this.ctx.fillStyle = "#ee8a16"
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.renderPoints();
        this.ctx.beginPath();
        this.ctx.fillRect(this.render_p[i][0] - 10, this.render_p[i][1] - 10, 20, 20);
        if (i + this.render_skip < this.render_p.length) {
            requestAnimationFrame(() => {
                this.animateObject(i + this.render_skip);
            })
        }
    }

    private renderPoints() {
        for (const p of this.render_p) {
            this.ctx.lineTo(p[0], p[1]);
        }
        this.ctx.stroke();
    }

    private renderHermit() {
        this.ctx.strokeStyle = 'rgba(23,215,232,0.89)';
        this.ctx.lineWidth = 3;
        for (let i = 0; i < this.hermit_points.length; i++) {
            for (let t = 0; t <= 1; t += this.interval) {
                if (this.hermit_points[i]) {
                    let res = this.hermit_basis(t, this.hermit_points[i]);
                    this.render_p.push([res[0], res[1]]);
                }
            }
        }


        this.renderPoints();
        this.ctx.beginPath();
        console.log("render length: ", this.render_p.length);
    }

    private renderCrude() {
        this.ctx.strokeStyle = 'black';
        this.ctx.lineWidth = 1;
        this.ctx.lineTo(this.curr_p[0], this.curr_p[1]);
        this.ctx.stroke();
    }
}