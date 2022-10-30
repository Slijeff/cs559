import {Viewport} from "./Viewport";
import {get2dCanvas} from "../../lib/utils";
import {Orthoproject} from "./Orthoproject";
import {Camera} from "./Camera";
import {World} from "./World";

export class System {
    private readonly viewport: Viewport;
    private readonly projection: Orthoproject;
    private readonly camera: Camera;
    private world: World;
    private ctx: CanvasRenderingContext2D;
    private canvas: HTMLCanvasElement;

    constructor() {
        const {canvas, ctx} = get2dCanvas()
        this.ctx = ctx;
        this.canvas = canvas;
        this.viewport = new Viewport(canvas)
        this.projection = new Orthoproject()
        // this.projection = new Perspectiveproject(canvas)
        this.camera = new Camera()
        this.world = new World(ctx)
    }

    render = () => {

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.world.transformTo(
            this.camera.transformTo(
                this.projection.transformTo(
                    this.viewport
                )
            )
        );
        this.world.renderAxes("grey", 3e4);
        requestAnimationFrame(this.render);

    }

}