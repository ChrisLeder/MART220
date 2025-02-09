let bulldog, squirrel, acorn;
let bulldogX, bulldogY;
let direction = 0;

function preload() {
  bulldog = loadImage('images/bulldog.png');  // Load images from "images" folder
  squirrel = loadImage('images/squirrel.png');
  acorn = loadImage('images/acorn.png');
}

function setup() {
  createCanvas(400, 400);
  noLoop();

  // Initial bulldog position (starting at top-left corner)
  bulldogX = 0;
  bulldogY = 0;

  // Move bulldog every 100ms
  setInterval(moveBulldog, 100);
}

function draw() {
  // Background: Brown wood texture
  background(139, 69, 19);
  
  // Draw the blue plate
  fill(0, 0, 255);
  ellipse(width / 2, height / 2, 250, 250);
  
  // Draw the hotdog bun
  fill(255, 204, 102);
  ellipse(width / 2, height / 2, 200, 50);
  
  // Draw the hotdog
  fill(255, 69, 0);
  ellipse(width / 2, height / 2, 160, 30);
  
  // Ketchup (Red wavy line)
  stroke(255, 0, 0);
  strokeWeight(3);
  noFill();
  beginShape();
  for (let x = width / 2 - 75; x < width / 2 + 75; x += 10) {
    let y = height / 2 + sin(x * 0.2) * 5;
    vertex(x, y);
  }
  endShape();
  
  // Mustard (Yellow wavy line)
  stroke(255, 223, 0);
  beginShape();
  for (let x = width / 2 - 75; x < width / 2 + 75; x += 10) {
    let y = height / 2 + sin(x * 0.2 + PI / 4) * 5;
    vertex(x, y);
  }
  endShape();
  
  // Reset stroke
  noStroke();
  
  // Draw tater tots
  fill(255, 204, 0);
  for (let i = 0; i < 7; i++) {
    let angle = TWO_PI / 7 * i;
    let x = width / 2 + cos(angle) * 80;
    let y = height / 2 + sin(angle) * 80;
    ellipse(x, y, 20, 20);
  }
  
  // Title Text
  fill(255);
  textSize(24);
  text("Hot Diggity", 10, 30);
  
  // Signature Text
  textSize(18);
  let nameX = width - 80;
  let nameY = height - 10;
  text("My Name", nameX, nameY);
  
  // Draw images near "My Name"
  image(squirrel, nameX - 55, nameY - 20, 50, 50); // Squirrel left of text
  image(acorn, nameX + 50, nameY - 20, 50, 50);    // Acorn right of text
  
  // Draw moving bulldog
  image(bulldog, bulldogX, bulldogY, 50, 50);
}

// Function to move bulldog around the perimeter
function moveBulldog() {
  let speed = 5;

  if (direction === 0) { // Move right
    bulldogX += speed;
    if (bulldogX >= width - 50) direction = 1;
  } else if (direction === 1) { // Move down
    bulldogY += speed;
    if (bulldogY >= height - 50) direction = 2;
  } else if (direction === 2) { // Move left
    bulldogX -= speed;
    if (bulldogX <= 0) direction = 3;
  } else if (direction === 3) { // Move up
    bulldogY -= speed;
    if (bulldogY <= 0) direction = 0;
  }
  
  redraw(); // Update canvas with new bulldog position
}