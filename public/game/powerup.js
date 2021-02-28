/// <reference path="../../p5.global-mode.d.ts" />

class Powerup {
    constructor() {
      this.r = 20;
      this.x = width - this.r;
      this.y = height - this.r - 140;
      this.speed = user_config.speed
    }
  
    show() {
        strokeWeight(2);
        fill(0, 51, 0);
        rect(this.x, this.y, this.r, this.r);
        
        this.x -= this.speed;
    }
}  
