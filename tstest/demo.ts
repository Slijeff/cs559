var canvas = document.getElementById("myCanvas") as HTMLCanvasElement;
var context = canvas.getContext("2d") as CanvasRenderingContext2D;

// a thick red line
context.lineWidth = 5;
context.strokeStyle = "red";

// the actual line
context.beginPath();
context.moveTo(50, 50);
context.lineTo(100, 100);
context.stroke();
