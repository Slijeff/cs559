import {Viewport} from "./Viewport";
import {get2dCanvas} from "../../lib/utils";
import {Camera} from "./Camera";
import {World} from "./World";
import {Cube} from "./Cube";
import {Checkbox} from "./Checkbox";
import {Orthoproject} from "./Orthoproject";
import {FPStracker} from "./FPStracker";

export class System {
  private readonly viewport: Viewport;
  private readonly projection: Orthoproject;
  private readonly camera: Camera;
  private readonly world: World;
  private ctx: CanvasRenderingContext2D;
  private canvas: HTMLCanvasElement;
  private readonly solar_system: { [name: string]: Cube };
  private gridCheckbox: Checkbox;
  private tracker: FPStracker;

  constructor() {
    const { canvas, ctx } = get2dCanvas();
    this.tracker = new FPStracker();
    this.ctx = ctx;
    this.canvas = canvas;
    this.viewport = new Viewport(canvas);
    this.projection = new Orthoproject();
    this.camera = new Camera();
    this.world = new World(ctx, 4e4);
    const scale = 0.35;
    this.solar_system = {
      sun: new Cube(
        ctx,
        scale,
        [-scale / 2, -scale / 2, -scale / 2],
        true,
        [-1, -1, -1],
        0.3
      ),
      planet1: new Cube(
        ctx,
        0.1,
        [0.6, 0.6, 0],
        true,
        [1, 1, 1],
        0.7,
        [255, 60, 41]
      ),
      planet1_moon1: new Cube(
        ctx,
        0.05,
        [0.15, 0.15, -0.15],
        true,
        [-1, -1, -1],
        2,
        [26, 186, 9]
      ),
      planet2: new Cube(
        ctx,
        0.2,
        [-0.6, -0.6, 0.4],
        true,
        [-1, -1, -1],
        0.25,
        [75, 9, 186]
      ),
      planet2_moon1: new Cube(
        ctx,
        0.11,
        [-0.3, 0.3, 0.2],
        true,
        [1, 2, 3],
        0.9,
        [176, 175, 9]
      ),
      planet2_moon2: new Cube(
        ctx,
        0.08,
        [0.3, -0.3, -0.2],
        true,
        [-2, -3, -1],
        1.2,
        [9, 176, 175]
      ),
      planet2_moon2_moon1: new Cube(
        ctx,
        0.04,
        [0.1, 0.5, 0.1],
        true,
        [-1, 1, -1],
        2,
        [130, 60, 41]
      ),
    };
    this.gridCheckbox = new Checkbox("#grid");
  }

  render = () => {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.world.transformTo(
      this.camera.transformTo(this.projection.transformTo(this.viewport))
    );
    this.solar_system["sun"].transformTo(this.world);
    this.solar_system["planet1"].transformTo(this.solar_system["sun"]);
    this.solar_system["planet2"].transformTo(this.solar_system["sun"]);
    this.solar_system["planet1_moon1"].transformTo(
      this.solar_system["planet1"]
    );
    this.solar_system["planet2_moon1"].transformTo(
      this.solar_system["planet2"]
    );
    this.solar_system["planet2_moon2"].transformTo(
      this.solar_system["planet2"]
    );
    this.solar_system["planet2_moon2_moon1"].transformTo(
      this.solar_system["planet2_moon2"]
    );

    if (this.gridCheckbox.checked) {
      this.world.renderAxes("grey");
    }

    for (const p in this.solar_system) {
      this.world.renderCubeTrace(this.solar_system[p]);
      this.solar_system[p].render();
    }

    this.tracker.track();
    requestAnimationFrame(this.render);
  };
}
