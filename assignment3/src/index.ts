import {get2dCanvas} from "../../lib/utils";
import {Game} from "./Game";

let {canvas, ctx} = get2dCanvas();
let game = new Game(20, canvas, ctx);

game.init();
game.start();
console.log(game);