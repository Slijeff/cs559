import { canvas2d, position } from "./types";

export function getCursorPosition(
  canvas: HTMLCanvasElement,
  event: MouseEvent
): position {
  const rect = canvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  return { x, y };
}

export function getCursorPositionRelative(
  canvas: HTMLCanvasElement,
  ctx: CanvasRenderingContext2D,
  event: MouseEvent
): position {
  let loc = getCursorPosition(canvas, event);
  let mat = ctx.getTransform();
  let imat = mat.invertSelf();
  let x = loc.x * imat.a + loc.y * imat.c + imat.e;
  let y = loc.x * imat.b + loc.y * imat.d + imat.f;
  return { x, y };
}

export function drawBezier(
  ctx: CanvasRenderingContext2D,
  sx,
  sy,
  cp1x,
  cp1y,
  ex,
  ey,
  cp2x,
  cp2y
): void {
  ctx.moveTo(sx, sy);
  ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, ex, ey);
}

export function getCanvas(): canvas2d {
  let canvas = document.getElementById("myCanvas") as HTMLCanvasElement;
  let ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
  return { canvas, ctx };
}

export function drawAxis(ctx: CanvasRenderingContext2D) {
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(200, 0);
  ctx.lineTo(90, -5);
  ctx.lineWidth = 3;
  ctx.strokeStyle = "red";
  ctx.stroke();

  ctx.strokeStyle = "blue";
  ctx.lineWidth = 1;

  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(0, 200);
  ctx.lineTo(-5, 90);
  ctx.stroke();

  ctx.strokeStyle = "black";
}
