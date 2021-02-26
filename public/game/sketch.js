/// <reference path="../../p5.global-mode.d.ts" />

let socket;

let user_config = {

    speed: 5,

    randomizer: 0.01,
    randomVal: 1.25,
     
    bg_r: 235,
    bg_g: 235,
    bg_b: 224,    
    user_r: 47,
    user_g: 47,
    user_b: 30
}

let user;

let blocks = []
let blockCount = 1;

let score;
let speedi;

function keyPressed() {
    if (key == ' ' && user.y == height - user.r) {
        user.jump();
    }
}

function setup() {

    socket = io.connect('http://localhost:3000')

    createCanvas(800, 800);

    user = new User();
    score = 0;
    speedi = 3000;
}

function draw() {
    background(user_config.bg_r, user_config.bg_g, user_config.bg_b);
    rectMode(CORNER)
    user.show()
    user.move()
    textSize(30);
    stroke(0);
    strokeWeight(1);
    fill(0);
    text('Score: ' + score, 10, 30)

    sendScore(score)

    textSize(30);
    stroke(0);
    strokeWeight(1);
    fill(0);
    socket.on('die', data => {
        text('Score 2: ' + data.s, 110, 30)
        }
    )
    


    if (random(user_config.randomVal) < user_config.randomizer) {
        
        console.log('randomval: ', user_config.randomVal)
        console.log('randomizer: ', user_config.randomizer)

        var i;
        for (i = 0; i <= blockCount; i++) {
            blocks.push(new Block());
            console.log('block push ' + i)
        }
    }

    if (user && blocks.length >= 1) {
        score++;
    }

    for (let t of blocks) {
        stroke(0);
        strokeWeight(2);
        t.show();

        if (score > speedi) {
            speedi += 2000;
            user_config.speed += 2;

            if (user_config.randomizer < 0.015) {
                user_config.randomizer += 0.005;
                user_config.randomVal -= 0.05
                blockCount++
            }
            console.log('speed: ', user_config.speed)
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

function sendScore(sc){
    const data = {s: sc}

    socket.emit('die', data)
}