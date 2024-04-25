let xCars = [600, 600, 600, 600, 600, 600];
let yCars = [40, 96, 150, 210, 270, 318];
let velCars = [2, 2.5, 3.2, 5, 3.3, 2.3];
let carLength = 50;
let carHeight = 40;

function showCar(){
  for (let i = 0; i < carImgs.length; i++){
    image(carImgs[i], xCars[i], yCars[i], carLength, carHeight);
  }
}

function carMovement(){
  for (let i = 0; i < carImgs.length; i++){
    xCars[i] -= velCars[i];
  }
}

function checkCarPosition(){
  for (let i = 0; i < carImgs.length; i++){
    if (passScreen(xCars[i])){
      xCars[i] = 600;
    }
  }
}

function passScreen(xCar){
  return xCar < - 50;
}
