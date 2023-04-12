let someRandomBall = {
  x: 45,
  speedX: 2,
  y: 200,
  speedY: 2,
  color: "blue",
};
function setup() {
  createCanvas(600, 600);
  Balls = [];
  for (let o = 0; o < 50; o++) {
    let thisX = random(width);
    let thisY = random(height);
    Balls[o] = new Ball(thisX, thisY);
  }
}

function draw() {
  background(0);
  for (let i = 0; i < 50; i++) {
    Balls[i].move();
    Balls[i].show();
  }
}
class Ball {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speedX = 2;
    this.speedY = 2;
  }
  move() {
    this.x = this.x + this.speedX;
    this.y = this.y + this.speedY;

    if (this.x > width - 25 || this.x < 0 + 25) {
      this.speedX = this.speedX * -1;
    }
    if (this.y > width - 25 || this.y < 0 + 25) {
      this.speedY = this.speedY * -1;
    }
  }
  show() {
    fill("cyan");
    ellipse(this.x, this.y, 50);
  }
}
