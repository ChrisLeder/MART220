let movingTots = [];
let hotdogX, hotdogY;

function setup() {
  createCanvas(600, 400);
  
  // Initial hot dog position
  hotdogX = width / 2;
  hotdogY = height / 1.8;

  // Initialize moving Tater Tots
  for (let i = 0; i < 2; i++) {
    movingTots.push({ 
      x: random(260, 340), 
      y: random(240, 270), 
      speedX: random(-1, 1), 
      speedY: random(-0.5, 0.5) 
    });
  }
}

function draw() {
  background(139, 69, 19); // Brown wooden surface

  // Add wood texture effect
  stroke(120, 60, 30);
  strokeWeight(2);
  for (let i = 0; i < height; i += 40) {
    line(0, i, width, i);
  }
  noStroke();

  // Handle movement using WASD
  let speed = 3;
  if (keyIsDown(87)) hotdogY -= speed; // W - Up
  if (keyIsDown(83)) hotdogY += speed; // S - Down
  if (keyIsDown(65)) hotdogX -= speed; // A - Left
  if (keyIsDown(68)) hotdogX += speed; // D - Right

  // Keep hot dog within the plate
  hotdogX = constrain(hotdogX, width / 2 - 100, width / 2 + 100);
  hotdogY = constrain(hotdogY, height / 1.85, height / 1.65);

  // Draw plate
  fill(0, 0, 255);
  ellipse(width / 2, height / 1.7, 320, 140);

  // Draw plate base shadow
  fill(0, 0, 180);
  ellipse(width / 2, height / 1.65, 320, 10);

  // Draw hot dog bun
  fill(255, 204, 102);
  ellipse(hotdogX, hotdogY, 220, 50);
  fill(200, 150, 70);
  rect(hotdogX - 110, hotdogY, 220, 20, 10);

  // Draw hot dog
  fill(165, 42, 42);
  ellipse(hotdogX, hotdogY, 170, 25);

  // Mustard
  stroke(255, 204, 0);
  strokeWeight(3);
  noFill();
  beginShape();
  for (let i = 0; i < 10; i++) {
    let x = map(i, 0, 9, hotdogX - 80, hotdogX + 80);
    let y = hotdogY + sin(i * 0.8) * 3;
    vertex(x, y);
  }
  endShape();

  // Ketchup
  stroke(200, 0, 0);
  beginShape();
  for (let i = 0; i < 10; i++) {
    let x = map(i, 0, 9, hotdogX - 80, hotdogX + 80);
    let y = hotdogY + sin(i * 0.8 + PI) * 3;
    vertex(x, y);
  }
  endShape();
  noStroke();

  // Draw static Tater Tots
  fill(255, 204, 102);
  for (let i = 0; i < 5; i++) {
    let x = 250 + (i * 40);
    let y = 270;
    ellipse(x, y, 18, 15);
    fill(200, 150, 70);
    ellipse(x, y + 3, 18, 8);
    fill(255, 204, 102);
  }

  // Draw moving Tater Tots
  for (let tot of movingTots) {
    ellipse(tot.x, tot.y, 18, 15);
    fill(200, 150, 70);
    ellipse(tot.x, tot.y + 3, 18, 8);
    fill(255, 204, 102);

    // Move randomly
    tot.x += tot.speedX;
    tot.y += tot.speedY;

    // Keep within plate
    if (dist(tot.x, tot.y, width / 2, height / 1.7) > 140) {
      tot.speedX *= -1;
      tot.speedY *= -1;
    }
  }
}
