// Pong game using JS in the p5js platform.

// setup function for p5js platform
function setup() {
  createCanvas(600, 400);
}

// player variables
let hit = false;
let velX = 6;
let velY = 6;
let xBall = 300;
let yBall = 200;
let diameter = 20;
let radius = diameter / 2;
let xRect = 5;
let yRect = 150;
let widthRect = 90;
let heightRect = 10;

// opp rectangle variables
let xOppRect = 585
let yOppRect = 150
let velYopp;

// points
let myPoints = 0;
let oppPoints = 0

// function for showing the ball and the player rectangle
function showBall() {
  circle(xBall, yBall, diameter);
}

function showRect(x, y) {
  rect(x, y, heightRect, widthRect);
}

// function for adding movement
function ballMov() {
  xBall += velX;
  yBall += velY;
}

// function for adding colision (to border) and border verification
function border() {
  if (xBall + radius > width || xBall - radius < 0) {
    velX *= -1;
  }
  if (yBall + radius > height || yBall - radius < 0) {
    velY *= -1;
  }
}

// function for moving the rectangle
function moveRect() {
  if (keyIsDown(UP_ARROW)) {
    yRect -= 10;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yRect += 10;
  }

  yRect = constrain(yRect, 10, 310);
}

// function for colligion with the rect
function rectColision(x, y) {
  hit = collideRectCircle(x, y, heightRect, widthRect, xBall, yBall, diameter);
  if (hit) {
    velX *= -1;
  }
}

// function for multiplayer
function multiplayer() {
  if (keyIsDown(87)) {
    yOppRect -= 10;
  }
  if (keyIsDown(83)) {
    yOppRect += 10;
  }
  
  yOppRect = constrain(yOppRect, 10, 310);
}

// point board function
function board() {
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(color(255,140,0));
  rect(150,10,40,20);
  fill(255);
  text(myPoints, 170, 26);
  fill(color(255,140,0));
  rect(450,10,40,20);
  fill(255);
  text(oppPoints, 470, 26);
}

// point scoring logic
function scoring() {
  if (xBall > 593) {
    myPoints += 1;
  }
  if (xBall < 7) {
    oppPoints += 1;
  }
}

function ballNotStuck() {
  if (XBall - radius < 0) {
  XBall = 23
  }
}
