// Snake class for head and body parts.
class Snake {
  // constructor.
  constructor(x, y, parent) {
    this.x  = x;
    this.px = -1;
    this.y  = y;
    this.py = -1;
    this.parent = parent;
  }

  // detects collosions with apple, wall, or self.
  collision() {    
    // display score and stop the game.
    function fail() {
      textSize(50)
      if (score > highScore) {
        text("High Score!\n        " + score, width / 2 - 130, height / 2)
      } else {
        text("Try Again", width / 2 - 105, height / 2 + 20)
      }
      noLoop();
    }
    
    // detects collosions with apple, increases score and length.
    if (apple.x == head.x && apple.y == head.y) {
      score += 1;
      apple = new Apple();
      if (snake.length == 0) {
        snake.push(new Snake(this.px, this.py, head));
      } else {
        snake.push(new Snake(this.px, this.py, snake[snake.length - 1]))
      }
    }

    // detects collisions with walls.
    if (head.x == -step || head.x == width) {
      fail();
    } else if (head.y == -step || head.y == height) {
      fail();
    }

    // detects collosion with bosy
    for (let i = 0; i < snake.length; i++) {
      if (head.x == snake[i].x && head.y == snake[i].y) {
        fail();
      }
    }
  }

  // body parts follow parents previous position.
  follow() {
    this.px = this.x;
    this.py = this.y;
    this.x  = this.parent.px;
    this.y  = this.parent.py;
  }

  // head moves in direction of arrow keys.
  move() {
    this.px = this.x;
    this.py = this.y;
    switch (direction) {
      case up:    this.y -= step; break;
      case right: this.x += step; break;
      case down:  this.y += step; break;
      case left:  this.x -= step; break;
    }
  }

  // display the snake.
  show() {
    stroke(230);
    fill(255);
    rect(this.x, this.y, size, size);
  }
}
