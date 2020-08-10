var startBackgroundImg, startBackgroundImg2, gameBgImg, groundImg, book, buidings, fire;
var form, state1, state, name, database, player, game;
var gamestate = 1;
var volcanoZone, no, eruption0, eruption1, eruption2, eruption3, eruption4;
var stormZone;
var smiley, danger;
var isVeryHighlyProneToCyclones, isHighlyProneToCyclones, isModeratelyProneToCyclones, isLessProneToCyclones;
var bird;
var pipes = [];
var info = [];
var sorted;
var score = 0;
var time, sky, night, ground;
var character, characterdata, dead;
var posx = 0;

function preload() {
  frameRate(60);
  startBackgroundImg = loadImage("images/volcano.jpg");
  startBackgroundImg2 = loadImage("images/hurricane.jpg");
  book = loadImage("images/book.png");

  no = loadImage("images/no.png");
  eruption0 = loadImage("images/eruption0.png");
  eruption1 = loadImage("images/eruption1.png");
  eruption2 = loadImage("images/eruption2.png");
  eruption3 = loadImage("images/eruption3.png");
  eruption4 = loadImage("images/eruption4.png");
  smiley = loadImage("images/smiley.png");
  danger = loadImage("images/danger.png");
  sky = loadImage('images/sky.png');
  night = loadImage('images/night.jpg');
  ground = loadImage('images/ground.jpg');
  character = loadImage('images/spritesheet.png');
  dead = loadImage('images/dead.png');
  characterdata = loadJSON('spritesheet.json');
}

function setup() {
  frameRate(60);
  createCanvas(displayWidth, displayHeight - 146);

  database = firebase.database();

  player = new Player();
  form = new Form();
  state = new State();
  state1 = new State1();

  volcanoZone = new VolcanoZone();
  stormZone = new StormZone();
  bird = new Bird();
  time = hour();
  console.log(time);
  stormZone.optionList();
}

function draw() {
  if (gamestate < 1) {
    frameRate(0.75);
    push();
    var rand = round(random(0, 1));
    switch (rand) {
      case 0: background(startBackgroundImg);
        break;
      case 1: background(startBackgroundImg2);
        break;
    }
    pop();
  }

  player.update();

  if (gamestate === 0) {
    form.display1();
    volcanoZone.hide();
    state1.hide();
    stormZone.hide();
  }

  if (gamestate > 0) {
    frameRate(60);
    background(0);
    form.hide();
  }

  if (gamestate === 1) {
    volcanoZone.show();
    state1.show();
    stormZone.show();
    state1.display();
    volcanoZone.display();
    volcanoZone.checkLocality();
    stormZone.display();
    checkLocalityForCyclones();
  }

  if (gamestate === 2) {
    if (time >= 6 && time <= 18) {
      background(sky);
    }
    else {
      background(night);
    }
    state1.hide();
    volcanoZone.hide();
    stormZone.hide();
    bird.update();

    if (frameCount % 100 === 0) {
      pipes.push(new Pipe());
    }

    for (var i = 0; i < pipes.length; i++) {
      if (pipes[i].x > 0 - pipes[i].w) {
        pipes[i].display();
        pipes[i].checkDistance();
      }
    }
    bird.display();
    if(!bird.dead){
    posx-=5;
    }
    if(posx<-300){
      posx = 0;
    }
    image(ground, posx, height - 100, 1900, 100);
    fill(0)
    textSize(70);
    textFont('Consolas');
    textStyle(BOLD)
    text(floor(score), width - 120, 100);
  }
}

function showBook() {

}

function keyPressed() {
  if (keyCode === 32 || keyCode === 38) {
    bird.flap();
  }
}