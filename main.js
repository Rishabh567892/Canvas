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

const camera = [0, 0, -20]

const vertices = [
  [150, 150, 0],
  [200, 150, 0],
  [200, 200, 0],
  [150, 200, 0],
  [150, 150, .1],
  [200, 150, .1],
  [200, 200, .1],
  [150, 200, .1]
]

const edges = [
  '01', '12', '23', '30',
  '45', '56', '67', '74',
  '04', '15', '26', '37'
];

// it just gives all permutations af all edges so don't mind it
// for (let i = 0; i < 7; i++) {
//   edges.push(...new Array(7 - i).fill(0).map((_, index) => String(i * 10 + (i + index + 1)).padStart(2, '0')))
// }

console.log('Permuatations of edges: ', edges)

let t = 0;
let change = 0.001;

function render() {

  ctx.clearRect(0, 0, w, h);

  t += change;

  if (t <= -0.5) {
    change = 0.001;
  } else if (t >= 1) {
    change = -0.001;
  }

  edges.forEach((edge) => {
    ctx.beginPath()

    let v1, v2;

    let zEff1 = vertices[edge[0]][2] + 1 + t;
    // if (zEff1 == 0) {
    //   v1 = vertices[edge[0]]
    // } else {
    v1 = vertices[edge[0]].map(v => v / zEff1)
    console.log(edge, ' v1:', v1)
    // }


    let zEff2 = vertices[edge[1]][2] + 1;
    // if (zEff2 == 0) {
    //   v2 = vertices[edge[1]]
    // } else {
    v2 = vertices[edge[1]].map(v => v / zEff2)
    console.log(edge, ' v2:', v2)
    // }

    ctx.moveTo(v1[0], v1[1]);

    ctx.lineTo(v2[0], v2[1])

    ctx.closePath()

    ctx.strokeStyle = "cyan"
    ctx.stroke()

  })


  requestAnimationFrame(render)
}

render()
// ctx.beginPath()

// ctx.moveTo(150, 150);
// ctx.lineTo(200, 200);
// ctx.lineTo(200, 300);
// ctx.lineTo(150, 250);

// ctx.closePath()

// ctx.strokeStyle = "green"
// ctx.stroke()