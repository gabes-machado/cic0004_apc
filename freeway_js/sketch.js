function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(roadImg);
  showChar();
  showCar();
  carMovement();
  charMovement();
  checkCarPosition();
  collideVerification();
  pointBoard();
  pointScorer();
}
