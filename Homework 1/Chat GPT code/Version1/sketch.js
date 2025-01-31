//demonstration
//This is the first version Chat GPT created re: Favorite food
function setup() {
    createCanvas(800, 600);
    background(200, 230, 255); // Light blue background for the plate
  
    // Draw the plate
    fill(100, 150, 255);
    ellipse(width / 2, height / 2, 400, 400);
  
    // Draw the hotdog bun
    fill(255, 204, 153);
    ellipse(width / 2, height / 2, 300, 100);
  
    // Draw the sausage
    fill(150, 50, 50);
    ellipse(width / 2, height / 2, 240, 50);
  
    // Add ketchup (red squiggle)
    stroke(255, 0, 0);
    strokeWeight(5);
    noFill();
    beginShape();
    for (let x = 280; x <= 520; x += 20) {
      vertex(x, height / 2 - 10 + sin(x * 0.1) * 10);
    }
    endShape();
  
    // Add mustard (yellow squiggle)
    stroke(255, 204, 0);
    strokeWeight(5);
    noFill();
    beginShape();
    for (let x = 280; x <= 520; x += 20) {
      vertex(x, height / 2 + 10 + sin(x * 0.1) * 10);
    }
    endShape();
  
    // Draw tater tots (yellowish-orange circles)
    fill(255, 204, 102);
    noStroke();
    for (let i = 0; i < 6; i++) {
      let angle = TWO_PI / 6 * i;
      let x = width / 2 + cos(angle) * 150;
      let y = height / 2 + sin(angle) * 150;
      ellipse(x, y, 40, 40);
    }
  }