import {getGLCanvas} from "../../lib/utils";
import GLcanvas from "./GLcanvas";

const {canvas, gl} = getGLCanvas();
const system = new GLcanvas(canvas, gl);
system.init();
system.render();