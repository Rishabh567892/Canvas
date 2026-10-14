const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d");
let h, w;

function resizeCanvas() {
  const dpr = devicePixelRatio;

  h = innerHeight;
  w = innerWidth;

  canvas.width = Math.round(w * dpr);
  canvas.height = Math.round(h * dpr);

  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}
resizeCanvas()

ctx.fillStyle = "red"

ctx.fillRect(5, 5, 100, 30);

const vertices = [
  [150,150, ]
]

ctx.beginPath()

ctx.moveTo(150,150);
ctx.lineTo(200, 200);
ctx.lineTo(200, 300);
ctx.lineTo(150, 250);

ctx.closePath()

ctx.strokeStyle = "green"
ctx.stroke()