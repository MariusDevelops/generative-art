function setup() {
  createCanvas(400, 400);
  strokeWeight(3);
  stroke(0, 255, 0);
  noFill();
}

function draw() {
  background(32);

  // outline
  rect(1, 1, width - 2, height - 2);

  // lower-left
  line(0, 0, width * 0.1, height);
  line(0, height * 0.1, width * 0.2, height);
  line(0, height * 0.2, width * 0.3, height);
  line(0, height * 0.3, width * 0.4, height);
  line(0, height * 0.4, width * 0.5, height);
  line(0, height * 0.5, width * 0.6, height);
  line(0, height * 0.6, width * 0.7, height);
  line(0, height * 0.7, width * 0.8, height);
  line(0, height * 0.8, width * 0.9, height);
  line(0, height * 0.9, width, height);

  // upper-right
  line(width * 0.9, 0, width, height);
  line(width * 0.8, 0, width, height * 0.9);
  line(width * 0.7, 0, width, height * 0.8);
  line(width * 0.6, 0, width, height * 0.7);
  line(width * 0.5, 0, width, height * 0.6);
  line(width * 0.4, 0, width, height * 0.5);
  line(width * 0.3, 0, width, height * 0.4);
  line(width * 0.2, 0, width, height * 0.3);
  line(width * 0.1, 0, width, height * 0.2);
  line(0, 0, width, height * 0.1);
}
