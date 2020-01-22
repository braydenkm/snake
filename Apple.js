// Apple class to spawn apple.
class Apple {
  // creates an apple in a random location without snake.
  constructor() {
    let empty = true;
    do {
      this.x = int(random(1, (width / step) - 1)) * step;
      this.y = int(random(1, (height / step) - 1)) * step;
      for (let i = 0; i < snake.length; i++) {
        if ((this.x == snake[i].x || this.x == head.x) &&
            (this.y == snake[i].y || this.y == head.y)) {
          empty = false;
          break;
        }
      }
    }
    while (!empty);
  }

  // display the snake.
  show() {
    stroke(255, 100, 100);
    fill(255, 0, 0);
    rect(this.x, this.y, size, size);
  }
}
