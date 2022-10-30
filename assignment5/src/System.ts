import {Viewport} from "./Viewport";
import {get2dCanvas} from "../../lib/utils";
import {Orthoproject} from "./Orthoproject";
import {Camera} from "./Camera";
import {World} from "./World";
import {Cube} from "./Cube";

export class System {
    private readonly viewport: Viewport;
    private readonly projection: Orthoproject;
    private readonly camera: Camera;
    private world: World;
    private ctx: CanvasRenderingContext2D;
    private canvas: HTMLCanvasElement;
    private readonly cube: Cube

    constructor() {
        const {canvas, ctx} = get2dCanvas()
        this.ctx = ctx;
        this.canvas = canvas;
        this.viewport = new Viewport(canvas)
        this.projection = new Orthoproject()
        // this.projection = new Perspectiveproject(canvas)
        this.camera = new Camera()
        this.world = new World(ctx, 4e4)
        this.cube = new Cube(ctx, .1)
    }

    render = () => {

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.cube.transformTo(
            this.world.transformTo(
                this.camera.transformTo(
                    this.projection.transformTo(
                        this.viewport
                    )
                )
            )
        )
        this.world.renderAxes("grey");
        this.cube.render();
        requestAnimationFrame(this.render);

    }

}