import { drawBezier, getCanvas, getCursorPositionRelative } from "./utils";

const { canvas, ctx } = getCanvas();
const xmid = canvas.width / 2;
const ymid = canvas.height / 2;
const PI = Math.PI;
let isDragging = false;
let isHolding = false;
let relx = 0;
let rely = 0;
let moveByDeg = 1;
let speed = 0.4;
let acc = 0.02;

const drawCenter = (x: number = 0, y: number = 0) => {
  ctx.beginPath();
  ctx.arc(x, y, 30, 0, 2 * PI);
  ctx.lineWidth = 5;
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(x, y, 18, 0, 2 * PI);
  ctx.fill();
};

const drawBase = () => {
  let width = 40;
  ctx.beginPath();

  ctx.moveTo(-width / 2, 0);
  ctx.lineTo(-width / 2, 70);
  ctx.moveTo(width / 2, 0);
  ctx.lineTo(width / 2, 70);

  ctx.lineTo(width / 2 + 40, 70);
  ctx.lineTo(width / 2 + 40, 100);
  ctx.lineTo(-width / 2 - 40, 100);
  ctx.lineTo(-width / 2 - 40, 70);
  ctx.lineTo(-width / 2, 70);

  ctx.moveTo(-width / 2, 0);
  ctx.lineTo(width / 2, 0);
  ctx.lineWidth = 3;
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(0, -100, 100, 0, 2 * PI);
  ctx.lineWidth = 18;
  ctx.stroke();
  ctx.lineWidth = 0.1;
};

const drawFanBlade = () => {
  ctx.beginPath();
  drawBezier(
    ctx,
    17.5,
    26.203125,
    100.5,
    110.203125,
    -11.5,
    29.203125,
    -87.5,
    113.203125
  );
  ctx.closePath();
  ctx.fillStyle = "#abdbe3";
  ctx.fill();
};

const drawFan = () => {
  drawBase();

  ctx.translate(0, -100);
  ctx.rotate((moveByDeg * PI * speed) / 180);
  drawCenter();
  ctx.save();

  drawFanBlade();
  ctx.rotate((90 * PI) / 180);
  drawFanBlade();
  ctx.rotate((90 * PI) / 180);
  drawFanBlade();
  ctx.rotate((90 * PI) / 180);
  drawFanBlade();

  ctx.restore();
  ctx.restore();
};

const update = () => {
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.restore();

  // draw new image
  ctx.translate(relx, rely);
  ctx.save();
  ctx.save();
  drawFan();
};

const animateSlowDown = () => {
  speed *= 1 - acc;
  update();
  if (speed > 0.4 && !isDragging) {
    requestAnimationFrame(animateSlowDown);
  }
};

const main = () => {
  canvas.onmousedown = (e: MouseEvent) => {
    isDragging = true;
  };
  canvas.onmouseup = (e: MouseEvent) => {
    isDragging = false;
    let loc = getCursorPositionRelative(canvas, ctx, e);
    relx = loc.x;
    rely = loc.y;
    moveByDeg = -1;
    animateSlowDown();
  };
  canvas.onmousemove = (e: MouseEvent) => {
    if (isDragging) {
      moveByDeg = 1;
      let loc = getCursorPositionRelative(canvas, ctx, e);
      relx = loc.x;
      rely = loc.y;
      speed *= 1 + acc;
      update();
    }
  };
  // original
  ctx.translate(xmid, ymid);
  ctx.save();
  drawFan();
};
main();
