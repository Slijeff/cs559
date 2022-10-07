import {mat3, vec2} from "./esm/index";

type tail = mat3;

export class Snake {
    readonly size: number;
    readonly canvas: HTMLCanvasElement;
    readonly ctx: CanvasRenderingContext2D;
    readonly original_mat: mat3;
    private tails: tail[] = [];
    private trans_mat: mat3;
    private targetCount: number;
    private speed_x: number;
    private speed_y: number;
    private rotation: number = 0;

    constructor(size: number, canvas: HTMLCanvasElement, context: CanvasRenderingContext2D, transformation: mat3) {
        this.size = size;
        this.canvas = canvas;
        this.ctx = context;
        this.trans_mat = transformation;
        this.original_mat = transformation;
        this.speed_x = 0;
        this.speed_y = 0;
    }

    moveToTx(x, y, Tx) {
        let res = vec2.create();
        vec2.transformMat3(res, [x, y], Tx);
        this.ctx.moveTo(res[0], res[1]);
    }

    lineToTx(x, y, Tx) {
        let res = vec2.create();
        vec2.transformMat3(res, [x, y], Tx);
        this.ctx.lineTo(res[0], res[1]);
    }

    axes(color, Tx) {
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

    public render(): Snake {
        this.ctx.fillStyle = "#3076ff";
        this.tails?.forEach((trans) => {
            let center = vec2.create();
            vec2.transformMat3(center, [0, 0], trans);
            this.ctx.fillRect(center[0], center[1], this.size, this.size);
        })
        let center = vec2.create();
        vec2.transformMat3(center, [0, 0], this.trans_mat);
        this.ctx.fillStyle = "#d28aff";
        this.drawBlock("#d28aff");

        // this.ctx.fillStyle = "#0b1628";
        // vec2.transformMat3(center, [0, 3], this.trans_mat);
        // this.ctx.fillRect(center[0], center[1], 6, 6);
        // vec2.transformMat3(center, [this.size - 6, 3], this.trans_mat);
        // this.ctx.fillRect(center[0], center[1], 6, 6);
        this.axes('red', this.trans_mat);

        return this;
    }

    public update(): Snake {
        for (let i = 0; i < this.tails.length - 1; i++) {
            this.tails[i] = mat3.clone(this.tails[i + 1]);
        }
        if (this.targetCount > 0) {
            this.tails[this.targetCount - 1 + this.tails.length] = mat3.clone(this.trans_mat);
        }

        mat3.translate(this.trans_mat, this.trans_mat, [this.speed_x, this.speed_y]);
        mat3.rotate(this.trans_mat, this.trans_mat, this.rotation);
        this.rotation = 0;

        if (this.trans_mat[7] < 0) {
            this.trans_mat[7] = this.canvas.height
        }
        if (this.trans_mat[7] > this.canvas.height) {
            this.trans_mat[7] = 0
        }
        if (this.trans_mat[6] < 0) {
            this.trans_mat[6] = this.canvas.width
        }
        if (this.trans_mat[6] > this.canvas.width) {
            this.trans_mat[6] = 0
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
        // TODO: Disallow changing to opposite direction
        switch (direction) {
            case 'ArrowUp':
            case 'w':
                this.speed_x = 0;
                this.speed_y = -Math.abs(this.size);
                this.rotation = Math.PI / 2;
                break;
            case 'ArrowDown':
            case 's':
                this.speed_x = 0;
                this.speed_y = Math.abs(this.size);
                break;
            case 'ArrowLeft':
            case 'a':
                this.speed_x = -Math.abs(this.size);
                this.speed_y = 0;
                break;
            case 'ArrowRight':
            case 'd':
                this.speed_x = Math.abs(this.size);
                this.speed_y = 0;
                break;
        }
        return this;
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

}