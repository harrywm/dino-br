/// <reference path="./p5.global-mode.d.ts" />

let unicorn;
let score;
let i;
let speedi;
let randomizer;
let uImg;
let tImg;
let bImg;
let trains = []

function keyPressed() {
    if (key == ' ' && unicorn.y == height - unicorn.r) {
        unicorn.jump();
    }
}

function setup() {
    createCanvas(800, 800);

    unicorn = new Unicorn();
    score = 0;
    i = 2000;
    speedi = 3000;
    randomizer = 0.01;
}

function draw() {
    background(235, 235, 224);
    rectMode(CORNER)
    unicorn.show()
    unicorn.move()
    rectMode(CORNER)
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

    if (score > i + 1000) {
        i += 2000;
    }

    if (random(1.25) < randomizer) {
        trains.push(new Train());
    }

    if (unicorn && trains.length >= 1) {
        score++;
    }

    for (let t of trains) {
        stroke(0);
        strokeWeight(2);
        t.show();

        if (score > speedi) {
            speedi += 3000;
            train.speed += 5;
            if (randomizer < 0.015)
                randomizer += 0.0005;
        }

        if (unicorn.hits(t)) {
            strokeWeight(4);
            fill(0);
            textSize(50);
            text('YOU DIED', 250, 200);
            noLoop();
        }
    }
}