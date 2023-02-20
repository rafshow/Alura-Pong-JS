//ball specs
let xBolinha = 300;
let yBolinha = 200;
let diameter = 15;
let speedXball = 5;
let speedYball = 5;
let radius = diameter/2;

//racket specs
let xRacket = 5;
let yRacket = 150;
let wRacket = 10;
let hRacket = 90;
let colision = false;

//opponent racket specs
let xOpRacket = 585;
let yOpRacket = 150;
let OpYSpeed;
let MistakeChance = 0;

//score
let MyScore = 0;
let OpScore = 0;

//sound
let ponto;
let strike;


function preload(){
  ponto = loadSound("ponto.mp3");
  strike = loadSound("raquetada.mp3");
}


function setup() {
  createCanvas(600, 400);
}


function draw() {
  background(0);
  createball();
  ballmovement();
  colisionVerifier();
  racket(xRacket, yRacket);
  racket(xOpRacket,yOpRacket);
  racketMovement();
  OpRacketMov();
  racketColision(xRacket,yRacket);
  racketColision(xOpRacket,yOpRacket);
  Score();
  showScore();
  //Multiplayer();
  
}


function createball(){
  circle (xBolinha,yBolinha, diameter);
}

function ballmovement(){
  xBolinha += speedXball;
  yBolinha += speedYball;
}

function colisionVerifier(){
    if (xBolinha + radius > width || xBolinha - radius < 0){ 
  	speedXball *= -1;
  }
  
  if (yBolinha + radius > height || yBolinha - radius < 0 ){
    speedYball *= -1;
  }
}

function racket(x,y){
  rect(x,y,wRacket,hRacket);
}

function racketMovement(){
  if(keyIsDown(UP_ARROW)){
    yRacket -= 10;
     }
  if(keyIsDown(DOWN_ARROW)){
    yRacket += 10;
  }
}

function racketColision(x,y){
colision = collideRectCircle(x,y,wRacket,hRacket,xBolinha,yBolinha,radius);
  if (colision){
    speedXball *= -1;
    strike.play();
  }
 }


function OpRacketMov(){
  OpYSpeed = yBolinha - yOpRacket - hRacket/2 - 30;
  yOpRacket += OpYSpeed + MistakeChance

}



function showScore(){
  textAlign (CENTER);
  textSize(16);
  fill(color(255,140,0));
  rect(130,10,40,20);
  rect(450,10,40,20);
  fill(255);
  text(MyScore,150,26);
  text(OpScore,470,26);
}

function Score(){
  if (xBolinha < 10){
    OpScore +=1;
    ponto.play();
  }
  if (xBolinha >590){
    MyScore += 1;
    ponto.play();
  }
}

function Multiplayer(){
    if(keyIsDown(87)){
    yOpRacket -= 10;
     }
  if(keyIsDown(83)){
    yOpRacket += 10;
  }
}