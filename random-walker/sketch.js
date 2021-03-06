let x;
let y;

let r;
let g;
let b;

function setup() {
  createCanvas(400, 400);
  x = width / 2;
  y = height / 2;

  r = random(255);
  g = random(255);
  b = random(255);

  background(50);
  // frameRate(600); increase speed
}

// for loop increases speed
function draw() {
  for (let i = 0; i < 1000; i++) {
    step();
  }
}

function step() {
  x += random(-1, 1);
  y += random(-1, 1);

  x = constrain(x, 0, width); // point do not go beyond wall
  y = constrain(y, 0, height);

  r += random(-1, 1);
  g += random(-1, 1);
  b += random(-1, 1);

  r = constrain(r, 0, 255);
  g = constrain(g, 0, 255);
  b = constrain(b, 0, 255);

  // stroke(255); stroke color
  stroke(r, g, b);
  point(x, y);
}
