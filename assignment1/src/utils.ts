export function getCursorPosition(canvas, event): [number, number] {
  const rect = canvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  return [x, y];
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
