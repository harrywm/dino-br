/// <reference path="../p5.global-mode.d.ts" />

class Block {
    constructor() {
      this.r = 50;
      this.x = width - this.r;
      this.y = height - this.r;
      this.speed = 5
    }
  
    show() {
        strokeWeight(2);
        fill(235, 235, 224);
        rect(this.x, this.y, this.r, this.r);
        this.x -= this.speed;
    }
}  