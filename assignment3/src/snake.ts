import {mat3, vec2} from "./esm/index";
import {Target} from "./target";
import {Data} from "./data";

type tail = mat3;

export class Snake extends Data {
    readonly size: number;
    readonly canvas: HTMLCanvasElement;
    readonly ctx: CanvasRenderingContext2D;
    readonly original_mat: mat3;
    private tails: tail[] = [];
    private trans_mat: mat3;
    private targetCount: number;
    private speed_x: number;
    private speed_y: number;
    // private rotation: number = 0;
    private html_score: HTMLParagraphElement;

    constructor(size: number, canvas: HTMLCanvasElement, context: CanvasRenderingContext2D, transformation: mat3) {
        super();
        this.size = size;
        this.canvas = canvas;
        this.ctx = context;
        this.trans_mat = transformation;
        this.original_mat = transformation;
        this.speed_x = 0;
        this.speed_y = 0;
        this.targetCount = 0;
        this.html_score = document.querySelector('#score') as HTMLParagraphElement;
        this.html_score.innerText = "SCORE: 0";

    }

    public get x(): number {
        return this.trans_mat[6];
    }

    public set x(n) {
        this.trans_mat[6] = n;
    }

    public get y(): number {
        return this.trans_mat[7];
    }

    public set y(n) {
        this.trans_mat[7] = n;
    }

    public render(): Snake {
        this.ctx.fillStyle = "#3076ff";
        this.tails?.forEach((trans) => {
            let center = vec2.create();
            vec2.transformMat3(center, [0, 0], trans);
            this.ctx.fillRect(center[0], center[1], this.size, this.size);
        })
        let center = vec2.create();
        vec2.transformMat3(center, [0, 0], this.trans_mat);
        this.drawBlock("#d28aff");

        return this;
    }

    public update(): Snake {
        for (let i = 0; i < this.tails.length - 1; i++) {
            this.tails[i] = mat3.clone(this.tails[i + 1]);
        }
        if (this.targetCount > 0) {
            this.tails[this.targetCount - 1] = mat3.clone(this.trans_mat);
        }

        mat3.translate(this.trans_mat, this.trans_mat, [this.speed_x, this.speed_y]);

        if (this.y < 0) {
            this.y = this.canvas.height - this.size;
        }
        if (this.y >= this.canvas.height) {
            this.y = 0
        }
        if (this.x < 0) {
            this.x = this.canvas.width - this.size;
        }
        if (this.x >= this.canvas.width) {
            this.x = 0
        }

        return this;
    }

    public start(): Snake {
        this.speed_y = -this.size;
        this.speed_x = 0;
        return this;
    }

    public pause(): Snake {
        this.speed_x = 0;
        this.speed_y = 0;
        return this;
    }

    public changeDirection(direction: string): Snake {
        switch (direction) {
            case 'ArrowUp':
            case 'w':
                if (this.speed_y !== Math.abs(this.size)) {
                    this.speed_x = 0;
                    this.speed_y = -Math.abs(this.size);
                }
                break;
            case 'ArrowDown':
            case 's':
                if (this.speed_y !== -Math.abs(this.size)) {
                    this.speed_x = 0;
                    this.speed_y = Math.abs(this.size);
                }
                break;
            case 'ArrowLeft':
            case 'a':
                if (this.speed_x !== Math.abs(this.size)) {
                    this.speed_x = -Math.abs(this.size);
                    this.speed_y = 0;
                }
                break;
            case 'ArrowRight':
            case 'd':
                if (this.speed_x !== -Math.abs(this.size)) {
                    this.speed_x = Math.abs(this.size);
                    this.speed_y = 0;
                }
                break;
        }
        return this;
    }

    public eatTarget(target: Target): Snake {
        if (this.x === target.x && this.y === target.y) {
            this.targetCount++;
            target.getRandomLocation(this.getAllTailsLocations());
            this.html_score.innerText = `SCORE: ${this.targetCount}`;
        }
        return this;
    }

    public getAllTailsLocations(): Set<string> {
        let locations = new Set<string>();
        this.tails.forEach((tail) => {
            locations.add(JSON.stringify([tail[6], tail[7]]));
        })
        return locations;
    }

    public checkTailsCollision(): Snake {
        if (this.getAllTailsLocations().has(JSON.stringify([this.x, this.y]))) {
            this.targetCount = 0;
            this.tails = [];
            this.html_score.innerText = `SCORE: ${this.targetCount}`;
        }
        return this;
    }

    private moveToTx(x, y, Tx) {
        let res = vec2.create();
        vec2.transformMat3(res, [x, y], Tx);
        this.ctx.moveTo(res[0], res[1]);
    }

    private lineToTx(x, y, Tx) {
        let res = vec2.create();
        vec2.transformMat3(res, [x, y], Tx);
        this.ctx.lineTo(res[0], res[1]);
    }

    private axes(color, Tx) {
        this.ctx.strokeStyle = color;
        this.ctx.beginPath();
        // Axes
        this.moveToTx(120, 0, Tx);
        this.lineToTx(0, 0, Tx);
        this.lineToTx(0, 120, Tx);
        // Arrowheads
        this.moveToTx(110, 5, Tx);
        this.lineToTx(120, 0, Tx);
        this.lineToTx(110, -5, Tx);
        this.moveToTx(5, 110, Tx);
        this.lineToTx(0, 120, Tx);
        this.lineToTx(-5, 110, Tx);
        // X-label
        this.moveToTx(130, -5, Tx);
        this.lineToTx(140, 5, Tx);
        this.moveToTx(130, 5, Tx);
        this.lineToTx(140, -5, Tx);
        // Y-label
        this.moveToTx(-5, 130, Tx);
        this.lineToTx(0, 135, Tx);
        this.lineToTx(5, 130, Tx);
        this.moveToTx(0, 135, Tx);
        this.lineToTx(0, 142, Tx);
        this.ctx.stroke();
    }

    private drawBlock(color: string) {
        this.ctx.beginPath();
        this.moveToTx(0, 0, this.trans_mat);
        this.lineToTx(0, this.size, this.trans_mat);
        this.lineToTx(this.size, this.size, this.trans_mat);
        this.lineToTx(this.size, 0, this.trans_mat);
        this.ctx.closePath();
        this.ctx.fillStyle = color;
        this.ctx.fill();
    }

    private drawEyes(color: string) {
        let eyes_trans = mat3.clone(this.trans_mat);
        const eye_size = 10;
        mat3.fromTranslation(eyes_trans, [-3, -1]);
        let eyes_to_body = mat3.create();
        mat3.multiply(eyes_to_body, this.trans_mat, eyes_trans);
        this.ctx.beginPath();
        this.moveToTx(0, 0, eyes_to_body);
        this.lineToTx(0, eye_size, eyes_to_body);
        this.lineToTx(eye_size, eye_size, eyes_to_body);
        this.lineToTx(eye_size, 0, eyes_to_body);
        this.ctx.closePath();
        this.ctx.fillStyle = color;
        this.ctx.fill();

        this.ctx.beginPath();
        this.moveToTx(eye_size + 6, 0, eyes_to_body);
        this.lineToTx(eye_size + 6, eye_size, eyes_to_body);
        this.lineToTx(eye_size * 2 + 6, eye_size, eyes_to_body);
        this.lineToTx(eye_size * 2 + 6, 0, eyes_to_body);
        this.ctx.closePath();
        this.ctx.fillStyle = color;
        this.ctx.fill();


    }

}