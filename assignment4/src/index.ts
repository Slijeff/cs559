import Curve from "./curve";
import {get2dCanvas} from "../../lib/utils";

const {canvas, ctx} = get2dCanvas();

const hermite_curve = new Curve(canvas, ctx);
console.log(hermite_curve)

