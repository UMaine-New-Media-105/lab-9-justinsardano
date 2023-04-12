let someRandomBall = {
  x: 45,
  speedX: 2,
  y: 200,
    speedY: 2,
  color: "blue",
};

let listOfBalls = [];

function setup() {
  createCanvas(400, 400);
}

function draw(){
  background(220);
      drawSprite(someRandomBall.x, someRandomBall.y, someRandomBall.color);
    someRandomBall.x = someRandomBall.x + someRandomBall.speedX;
      someRandomBall.y = someRandomBall.y + someRandomBall.speedY;


    if (someRandomBall.x > width-25 || someRandomBall.x < 0+25) {
      someRandomBall.speedX = someRandomBall.speedX * -1;
    }
    if (someRandomBall.y > width-25 || someRandomBall.y < 0+25) {
      someRandomBall.speedY = someRandomBall.speedY * -1;
}
}

function drawSprite(x, y, color) {
  fill(color);
  ellipse(x, y, 50);
}
