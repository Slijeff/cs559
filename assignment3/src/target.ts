import {mat3, vec2} from "./esm/index";

export class Target {

    readonly n_cols;
    readonly n_rows;
    private trans_mat: mat3;
    private size: number;
    private _canvas: HTMLCanvasElement;
    private _ctx: CanvasRenderingContext2D;

    constructor(n_rows: number, n_cols: number, size: number, canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
        this.size = size;
        this._canvas = canvas;
        this._ctx = ctx;
        let x = (Math.floor(Math.random() * n_cols - 1) + 1) * this.size;
        let y = (Math.floor(Math.random() * n_rows - 1) + 1) * this.size;
        this.trans_mat = mat3.create();
        mat3.fromTranslation(this.trans_mat, [x, y]);
        this.n_cols = n_cols;
        this.n_rows = n_rows;
    }

    public get x(): number {
        return this.trans_mat[6];
    }

    public get y(): number {
        return this.trans_mat[7];
    }

    private static randomBetween(min: number, max: number): number {
        return Math.random() * (max - min) + min;
    }

    public getRandomLocation(tabooLocations: Set<string>): Target {
        let x = (Math.floor(Math.random() * this.n_cols - 1) + 1) * this.size;
        let y = (Math.floor(Math.random() * this.n_rows - 1) + 1) * this.size;
        while (tabooLocations.has(JSON.stringify([x, y]))) {
            console.log([x, y]);
            x = (Math.floor(Math.random() * this.n_cols - 1) + 1) * this.size;
            y = (Math.floor(Math.random() * this.n_rows - 1) + 1) * this.size;
        }
        this.trans_mat = mat3.create();
        mat3.fromTranslation(this.trans_mat, [x, y]);
        return this
    }

    public render(): Target {
        this._ctx.fillStyle = "#f39832";
        let center = vec2.create();
        vec2.transformMat3(center, [0, 0], this.trans_mat);
        this._ctx.fillRect(center[0], center[1], this.size, this.size);
        return this
    }
}