/*this is my CC2 HW3 assignment.
I was able to figure out the movement variable with the help of M. Cassens, Youtube, and Chat GPT
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

//images   
var bulldog;
var squirrel;
var acorn;

//image movement variables
let bdx = 310, bdy = 10;  // Start position
let bdspeed = 3;
//let direction = 'right';  // Initial direction
let dir = 0;//0=right, 1= down, 2= left, 3 = up

//Font
let myFont;
let myFont1;

function preload() {
  bulldog = loadImage("images/bulldog.jpg");
  squirrel = loadImage("images/squirrel.png");
  acorn = loadImage("images/Acorn.jpg");

  myFont = loadFont("Libs/Fonts/Rye-Regular.ttf");
  myFont1 = loadFont("Libs/Fonts/Satine.ttf");

}

function setup() {
  createCanvas(400, 400);

  setInterval(() => {
    // Move based on dir index
    if (dir === 0) bdx += bdspeed; // Move right
    if (dir === 1) bdy += bdspeed; // Move down
    if (dir === 2) bdx -= bdspeed; // Move left
    if (dir === 3) bdy -= bdspeed; // Move up

    // Change direction at boundaries
    if (bdx >= width - 50 && dir === 0) dir = 1;  // Switch to down
    if (bdy >= height - 50 && dir === 1) dir = 2; // Switch to left
    if (bdx <= 0 && dir === 2) dir = 3;  // Switch to up
    if (bdy <= 0 && dir === 3) dir = 0;  // Switch to right
  }, 50);
}



function draw() {
  background(115, 60, 11);
  //images
  image(bulldog, bdx, bdy, 50, 50);
  image(squirrel, 160, 350, 50, 50);
  image(acorn, 350, 350, 50, 50);

  //Text
  fill(0);
  textFont(myFont);
  textSize(48);
  text('Hot Diggity', 20, 50);
  fill(0);
  textFont(myFont1);
  textSize(16);
  text('Chris Leder', 220, 375);

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
  tTx += speed;
  tTy += speed;
  tTx1 += speed;
  tTy1 += speed;
  
  //stay in bounds
  if (tTx <= 0 || tTx >= width - 50) {
    speed *= -1;
  }
  if (tTy <= 0 || tTy >= height - 40) {
    speed *= -1;
  }
  {
    if (tTx1 <= 0 || tTx1 >= width - 30) {
      speed *= -1;
      
    }
    if (tTy1 <= 0 || tTy1 >= height - 50) {
      speed *= -1;
      
    }
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