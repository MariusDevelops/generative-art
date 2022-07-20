function setup() {
  createCanvas(400, 400);

  strokeWeight(32);
  strokeCap(SQUARE);
  noFill();

  noLoop();
}

// function draw() {
//   background(32);

//   stroke(random(255), random(255), random(255));
//   arc(200, 200, 64, 64, 0, PI);
//   stroke(random(255), random(255), random(255));
//   arc(200, 200, 64, 64, PI, 0);

//   stroke(random(255), random(255), random(255));
//   arc(200, 200, 160, 160, PI / 6, (PI * 5) / 6);
//   stroke(random(255), random(255), random(255));
//   arc(200, 200, 160, 160, (PI * 5) / 6, (PI * 3) / 2);
//   stroke(random(255), random(255), random(255));
//   arc(200, 200, 160, 160, (PI * 3) / 2, PI / 6);

//   stroke(random(255), random(255), random(255));
//   arc(200, 200, 256, 256, 0, PI / 2);
//   stroke(random(255), random(255), random(255));
//   arc(200, 200, 256, 256, PI / 2, PI);
//   stroke(random(255), random(255), random(255));
//   arc(200, 200, 256, 256, PI, (PI * 3) / 2);
//   stroke(random(255), random(255), random(255));
//   arc(200, 200, 256, 256, (PI * 3) / 2, 0);

//   stroke(random(255), random(255), random(255));
//   arc(200, 200, 352, 352, (PI * 3) / 10, (PI * 7) / 10);
//   stroke(random(255), random(255), random(255));
//   arc(200, 200, 352, 352, (PI * 7) / 10, (PI * 11) / 10);
//   stroke(random(255), random(255), random(255));
//   arc(200, 200, 352, 352, (PI * 11) / 10, (PI * 3) / 2);
//   stroke(random(255), random(255), random(255));
//   arc(200, 200, 352, 352, (PI * 3) / 2, (PI * 19) / 10);
//   stroke(random(255), random(255), random(255));
//   arc(200, 200, 352, 352, (PI * 19) / 10, (PI * 3) / 10);
// }

///////////// ARCS COMPOSITION 2 ///////////////////
function draw() {
  // background(32);
  background(random(255), random(255), random(255));

  stroke(random(255), random(255), random(255));
  arc(200, 200, 64, 64, 0, PI);
  stroke(random(255), random(255), random(255));
  arc(200, 200, 64, 64, PI, 0);

  // from center to left
  stroke(random(255), random(255), random(255));
  arc(100, 200, 64, 64, 0, PI);
  stroke(random(255), random(255), random(255));
  arc(100, 200, 64, 64, PI, 0);

  stroke(random(255), random(255), random(255));
  arc(0, 200, 64, 64, 0, PI);
  stroke(random(255), random(255), random(255));
  arc(0, 200, 64, 64, PI, 0);

  // from center to right
  stroke(random(255), random(255), random(255));
  arc(300, 200, 64, 64, 0, PI);
  stroke(random(255), random(255), random(255));
  arc(300, 200, 64, 64, PI, 0);

  stroke(random(255), random(255), random(255));
  arc(400, 200, 64, 64, 0, PI);
  stroke(random(255), random(255), random(255));
  arc(400, 200, 64, 64, PI, 0);

  // top and bottom smalls
  stroke(random(255), random(255), random(255));
  arc(200, 000, 64, 64, 0, PI);
  stroke(random(255), random(255), random(255));
  arc(200, 400, 64, 64, PI, 0);

  // top big
  strokeWeight(50);
  stroke(random(255), random(255), random(255));
  arc(200, 000, 250, 250, 0, PI);
  stroke(random(255), random(255), random(255));
  arc(-100, 000, 250, 250, 0, PI);
  stroke(random(255), random(255), random(255));
  arc(500, 000, 250, 250, 0, PI);

  // bottom big
  stroke(random(255), random(255), random(255));
  arc(200, 400, 250, 250, PI, 0);
  stroke(random(255), random(255), random(255));
  arc(-100, 400, 250, 250, PI, 0);
  stroke(random(255), random(255), random(255));
  arc(500, 400, 250, 250, PI, 0);
}
