// draw function for p5js platform
function draw() {
    background(0);
    showBall();
    showRect(xRect, yRect);
    showRect(xOppRect, yOppRect);
    ballMov();
    border();
    moveRect();
    rectColision(xRect, yRect);
    rectColision(xOppRect, yOppRect);
    multiplayer();
    board();
    scoring();
  }
