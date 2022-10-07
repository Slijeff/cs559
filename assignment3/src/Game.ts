import {Target} from "./target";
import {Snake} from "./snake";
import {mat3} from "./esm/index";

export class Game {
    readonly size: number;
    readonly n_rows: number;
    readonly n_cols: number;
    readonly canvas: HTMLCanvasElement;
    readonly ctx: CanvasRenderingContext2D;
    readonly start_point: vec2;
    readonly decay: number = 0.08;
    readonly min_tick: number = 20;
    private tick: number = 100;
    private target: Target;
    private snake: Snake;
    private started: boolean;


    constructor(size: number, canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {
        this.size = size;
        this.canvas = canvas;
        this.ctx = context;
        this.n_rows = canvas.height / size;
        this.n_cols = canvas.width / size;
        this.started = false;
        // Initial point of the snake
        this.start_point = [this.canvas.width / 2, this.canvas.height / 2]
    }

    public init(): void {
        // this.target = new Target()
        //     .getRandomLocation()
        //     .render();
        let snakeTransformMat = mat3.create();
        mat3.fromTranslation(snakeTransformMat, this.start_point);
        this.snake = new Snake(this.size, this.canvas, this.ctx, mat3.clone(snakeTransformMat))
            .render();

        window.addEventListener('keydown', (ev: KeyboardEvent) => {
            const dir = ev.key;
            this.snake.changeDirection(dir);
            if (!this.started) {
                this.started = true;
                this.start();
            }

        })

        let start_btn = document.querySelector('#start') as HTMLButtonElement;
        start_btn.onclick = (ev: MouseEvent) => {
            this.snake.start();
            this.started = true;
            this.start();
        }

        let pause_btn = document.querySelector('#pause') as HTMLButtonElement;
        pause_btn.onclick = (ev: MouseEvent) => {
            this.snake.pause();
            this.started = false;
        }

        let restart_btn = document.querySelector('#restart') as HTMLButtonElement;
        restart_btn.onclick = (ev: MouseEvent) => {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.snake = new Snake(this.size, this.canvas, this.ctx, mat3.clone(snakeTransformMat))
                .render();
            this.started = false;
            this.tick = 100;
        }

    }

    public start(): void {
        if (this.started) {
            setTimeout(() => {
                this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
                this.snake.update().render();
                this.tick = this.tick - this.decay < this.min_tick ? this.min_tick : this.tick - this.decay;
                this.start();
            }, this.tick);
        }

        // requestAnimationFrame(this.start(self));

    }
}