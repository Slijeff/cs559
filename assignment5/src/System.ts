import {Viewport} from "./Viewport";
import {get2dCanvas} from "../../lib/utils";
import {Camera} from "./Camera";
import {World} from "./World";
import {Cube} from "./Cube";
import {Checkbox} from "./Checkbox";
import {Orthoproject} from "./Orthoproject";

export class System {
    private readonly viewport: Viewport;
    private readonly projection: Orthoproject;
    private readonly camera: Camera;
    private world: World;
    private ctx: CanvasRenderingContext2D;
    private canvas: HTMLCanvasElement;
    private readonly sun: Cube;
    private readonly planet1: Cube;
    private readonly planet1_moon1: Cube;
    private readonly planet2: Cube;
    private gridCheckbox: Checkbox;

    constructor() {
        const {canvas, ctx} = get2dCanvas()
        this.ctx = ctx;
        this.canvas = canvas;
        this.viewport = new Viewport(canvas)
        this.projection = new Orthoproject()
        // this.projection = new Perspectiveproject(canvas)
        this.camera = new Camera()
        this.world = new World(ctx, 4e4)
        const scale = .35;
        this.sun = new Cube(
            ctx,
            scale,
            [-scale / 2, -scale / 2, -scale / 2],
            true,
            [-1, -1, -1],
            0.3
        )
        this.planet1 = new Cube(
            ctx,
            0.1,
            [.6, .6, 0],
            true,
            [1, 1, 1],
            0.7,
            [255, 60, 41]
        )
        this.planet1_moon1 = new Cube(
            ctx,
            0.05,
            [.15, .15, -.15],
            true,
            [-1, -1, -1],
            2,
            [26, 186, 9]
        )
        this.planet2 = new Cube(
            ctx,
            0.2,
            [.6, -.6, .4],
            true,
            [-1, -1, -1],
            0.25,
            [75, 9, 186]
        )
        this.gridCheckbox = new Checkbox('#grid')
    }

    render = () => {

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.world.transformTo(
            this.camera.transformTo(
                this.projection.transformTo(
                    this.viewport
                )
            )
        )
        this.sun.transformTo(this.world);
        this.planet1.transformTo(this.sun);
        this.planet2.transformTo(this.sun);
        this.planet1_moon1.transformTo(this.planet1);

        if (this.gridCheckbox.checked) {
            this.world.renderAxes("grey");
            this.world.renderCubeTrace(this.planet1_moon1);
            this.world.renderCubeTrace(this.planet1);
            this.world.renderCubeTrace(this.planet2);
        }
        this.sun.render();
        this.planet1.render();
        this.planet2.render();
        this.planet1_moon1.render();
        requestAnimationFrame(this.render);

    }

}