/// <reference path="../p5.global-mode.d.ts" />

let user;
let score;
let i;
let speedi;
let randomizer;
let uImg;
let tImg;
let bImg;
let blocks = []

function keyPressed() {
    if (key == ' ' && user.y == height - user.r) {
        user.jump();
    }
}

function setup() {
    createCanvas(800, 800);

    user = new User();
    score = 0;
    speedi = 3000;
    randomizer = 0.01;
}

function draw() {
    background(235, 235, 224);
    rectMode(CORNER)
    user.show()
    user.move()
    textSize(30);
    stroke(0);
    strokeWeight(1);
    fill(0);
    text('Score: ' + score, 10, 30)

    if (score > i) {
        dino.show();
        fill(0);
        strokeWeight(1);
        text('Score : ' + score, 10, 30);
    }

    if (random(1.25) < randomizer) {
        blocks.push(new block());
    }

    if (user && blocks.length >= 1) {
        score++;
    }

    for (let t of blocks) {
        stroke(0);
        strokeWeight(2);
        t.show();

        if (score > speedi) {
            speedi += 3000;
            block.speed += 10;
            if (randomizer < 0.015)
                randomizer -= 0.0005;
        }

        if (user.hits(t)) {
            strokeWeight(4);
            fill(0);
            textSize(50);
            text('YOU DIED', 250, 200);
            //noLoop();
        }
    }
}