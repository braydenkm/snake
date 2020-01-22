/*
    SNAKE
    Brayden M.  - 20/01/2020
*/

// game settings.
let canvasX = 400;      // screen size (rec: 400x400)
let canvasY = 400;
let gameSpeed = 12;     // game speed (rec: 12)
let hardMode = false;   // speed increases with length.


// variables.
var snake, head, apple, size, direction, step, score;
let up = 0,
  right = 1,
  down = 2,
  left = 3,
  highScore = 1;

// calls init().
function setup() {
  frameRate(gameSpeed)
  init();
}

// sets up a fresh game.
function init() {
  // set up canvas.
  background(120);
  createCanvas(canvasX, canvasY);
  noStroke();
  // initialize variables.
  snake = [];
  direction = 0;
  step = 10;
  score = 1;
  size = step;
  head = new Snake(width / 2, height / 2, null);
  apple = new Apple();
}

// loops through the game.
function draw() {
  background(120);
  // increase speed if in hard mode.
  if (hardMode) {
    let newSpeed = gameSpeed + snake.length; 
    frameRate(newSpeed);
  }
  // draw score display.
  noStroke();
  textSize(20);
  fill(255, 100);
  text("length  " + score, 10, height - 35);
  text("space to restart", 10, height - 10);
  text(highScore + "  highscore", width - 120, 25);
  // show apple.
  apple.show();
  // move, show, and check collosions on head.
  head.move();
  head.show();
  head.collision();
  // move and show snake body.
  for (let i = 0; i < snake.length; i++) {
    snake[i].follow();
    snake[i].show();
  }
}

// arrows for direction, space for refresh game.
function keyPressed() {
  if (keyCode == UP_ARROW && direction != down)
    direction = up;
  else if (keyCode == RIGHT_ARROW && direction != left)
    direction = right;
  else if (keyCode == DOWN_ARROW && direction != up)
    direction = down;
  else if (keyCode == LEFT_ARROW && direction != right)
    direction = left;
  else if (key == " ") {
    if (score > highScore) highScore = score;
    loop();
    init();
  }
  return null;
}
