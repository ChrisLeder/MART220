/*this is my CC2 HW3 assignment
*/
//Hot Dog variables
var hDx1 = 100;
var hDx2 = 85;
var hDx3 = 110;
var hDx4 = 118;
var hDx41 = 300;
var hDx5 = 119;
var hDx51 = 302;

var hDy1 = 90;
var hDy2 = 95;
var hDy3 = 110;
var hDy4 = 96;
var hDy5 = 102;
var hDy41 = 96;
var hDy51 = 102;

//Tater Tot variables
var tTx = 180;
var tTy = 200;
var tTx1 = 80;
var tTy1 = 180;


var speed = 1;

//image 
var bulldog;
//Font
let myFont;
let myFont1;

function preload() {
  bulldog = loadImage("images/bulldog.jpg");
  myFont = loadFont("Libs/Fonts/Rye-Regular.ttf");
  myFont1 = loadFont("Libs/Fonts/Satine.ttf");

}


function setup() {
  createCanvas(400, 400);



}

function draw() {
  background(115, 60, 11);

  image(bulldog, 0, 0);
  //Text
  fill(0);
  textFont(myFont);
  textSize(48);
  text('Hot Diggity', 20, 50);
  fill(0);
  textFont(myFont1);
  textSize(36);
  text('Chris Leder', 225, 375);

  //plate
  {
    stroke(29, 86, 167);
    strokeWeight(5);
    fill(51, 148, 219);
    ellipseMode(RADIUS);
    ellipse(199, 199, 180, 100);
  }
  {
    //hotdog
    //bun
    noStroke();
    fill(218, 172, 75);
    rect(hDx1, hDy1, 200, 75, 30);
    //hotdog
    noStroke();
    fill(208, 110, 33);
    rect(hDx2, hDy2, 240, 60, 30);
    //bun
    noStroke();
    fill(218, 172, 75);
    rect(hDx3, hDy3, 200, 75, 30);
    //condiments
    stroke(226, 226, 20);
    strokeWeight(8);
    line(hDx4, hDy4, hDx41, hDy41);
    stroke(200, 63, 23);
    strokeWeight(8);
    line(hDx5, hDy5, hDx51, hDy51);
  }
  //tatertots

  {
    fill(167, 118, 13);
    stroke(149, 102, 12);
    strokeWeight(3);
    rect(tTx, tTy, 55, 45, 10);
    fill(167, 118, 13);
    stroke(149, 102, 12);
    strokeWeight(3);
    rect(100, 250, 55, 45, 10);
    fill(167, 118, 13);
    stroke(149, 102, 12);
    strokeWeight(3);
    rect(75, 230, 55, 45, 10);

    fill(167, 118, 13);
    stroke(149, 102, 12);
    strokeWeight(3);
    fill(167, 118, 13);
    rect(200, 218, 55, 45, 10);
    fill(167, 118, 13);
    stroke(149, 102, 12);
    strokeWeight(3);
    rect(tTx1, tTy1, 55, 45, 10);
    fill(167, 118, 13);
    stroke(149, 102, 12);
    strokeWeight(3);
    rect(250, 200, 55, 45, 10);
    fill(167, 118, 13);
    stroke(149, 102, 12);
    strokeWeight(3);
    rect(180, 250, 55, 45, 10);
  }

  //tater tot movement
  tTx += tTx + speed;
  tTy += tTy + speed;
  //stay in bounds
  if (tTx <= 0 || tTx >= width - 50) {
    speed *= -1;
  }
  if (tTy <= 0 || tTy >= height - 40) {
    speed *= -1;
  }

  hotdogMovement();
}
function hotdogMovement() {
  if (keyIsPressed) {
    if (key == 'a') {
      hDx1 = hDx1 - 1;
      hDx2 = hDx2 - 1;
      hDx3 = hDx3 - 1;
      hDx4 = hDx4 - 1;
      hDx41 = hDx41 - 1;
      hDx5 = hDx5 - 1;
      hDx51 = hDx51 - 1;
    }

    else if (key == 'd') {
      hDx1 = hDx1 + 1;
      hDx2 = hDx2 + 1;
      hDx3 = hDx3 + 1;
      hDx4 = hDx4 + 1;
      hDx41 = hDx41 + 1;
      hDx5 = hDx5 + 1;
      hDx51 = hDx51 + 1;
    }
    else if (key == 'w') {
      hDy1 = hDy1 - 1;
      hDy2 = hDy2 - 1;
      hDy3 = hDy3 - 1;
      hDy4 = hDy4 - 1;
      hDy41 = hDy41 - 1;
      hDy5 = hDy5 - 1;
      hDy51 = hDy51 - 1;
    }
    else if (key == 's') {
      hDy1 = hDy1 + 1;
      hDy2 = hDy2 + 1;
      hDy3 = hDy3 + 1;
      hDy4 = hDy4 + 1;
      hDy41 = hDy41 + 1;
      hDy5 = hDy5 + 1;
      hDy51 = hDy51 + 1;
    }
  }
}