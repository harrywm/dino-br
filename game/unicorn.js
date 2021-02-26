/// <reference path="../p5.global-mode.d.ts" />

class Unicorn {

    constructor() {
        this.r = 50;
        this.x = 50;
        this.y = height - this.r;
        this.vy = 0;
        this.gravity = 1;
    }
 
    jump() {
        this.vy = 20;
    }

    show() {
        fill(47, 47, 30);
        stroke(0);
        strokeWeight(2);
        rect(this.x, this.y, this.r, this.r);
    }

    move() {
        this.y -= this.vy;
        this.vy -= this.gravity;
        this.y = constrain(this.y, 0, height - this.r);
    }

    hits(train) {
        return collideRectRect(this.x, this.y, this.r - 5, this.r - 5, train.x, train.y, train.r, train.r);
    }
}