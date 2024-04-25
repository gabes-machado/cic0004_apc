let yChar = 366;
let xChar = 90;
let myPoints = 0;

function showChar() {
  image(charImg, xChar, yChar, 30, 30);
}

function charMovement() {
  if (keyIsDown(UP_ARROW)){
    yChar -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    if (canItMove()) {
      yChar += 3;
    }
  }
}
  
function collideVerification() {
  for (let i = 0; i < carImgs.length; i++) {
    collision = collideRectCircle(xCars[i], yCars[i], carLength, carHeight, xChar, yChar, 15)
    if (collision) {
      collided()
    }
  }
}

function collided() {
  yChar = 366;
  if (pointGreaterZero()) {
    myPoints--;
  }
}

function pointBoard() {
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 190, 90));
  text(myPoints, width / 5, 25);
}

function pointScorer() {
  if (yChar < 15) {
    myPoints++;
    yChar = 366;
  }
}

function pointGreaterZero() {
  return myPoints > 0;  
}

function canItMove() {
  return yChar < 366;
}