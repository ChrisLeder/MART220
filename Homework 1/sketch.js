//this is my homework 1 assignment_ Favorite Food
//this is my second attempt due to personal failure.

function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(115, 60, 11 );
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
      rect(100, 90, 200, 75, 30);
      //hotdog
      noStroke();
      fill(208, 110, 33);
      rect(85, 95, 240, 60, 30);
      //bun
      noStroke();
      fill(218, 172, 75);
      rect(110, 110, 200, 75, 30);
      //condiments
      stroke(226, 226, 20);
      strokeWeight(8);
      line(118, 96, 300, 96);
      stroke(200, 63, 23);
      strokeWeight(8);
      line(118, 102, 302, 102);
    }
    //tatertots
    {
      fill(167, 118, 13);
      stroke(149, 102, 12);
      strokeWeight(3);
      rect(180, 200, 55, 45, 10);
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
      rect(80, 180, 55, 45, 10);
      fill(167, 118, 13);
      stroke(149, 102, 12);
      strokeWeight(3);
      rect(250, 200, 55, 45, 10);
      fill(167, 118, 13);
      stroke(149, 102, 12);
      strokeWeight(3);
      rect(180, 250, 55, 45, 10);
    }
  }