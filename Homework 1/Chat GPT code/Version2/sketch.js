//This is the second version Chat GPT created re: Favorite food
function setup() {
    createCanvas(800, 600);
    background(200, 230, 255); // Light blue background for the plate
  
    // Draw the plate (profile view as a flat ellipse)
    fill(100, 150, 255);
    ellipse(width / 2, height - 100, 500, 50);
  
    // Draw the hotdog bun (profile view as a rounded rectangle)
    fill(255, 204, 153);
    rectMode(CENTER);
    rect(width / 2, height - 130, 300, 50, 20);
  
    // Draw the sausage (profile view as a smaller rounded rectangle)
    fill(150, 50, 50);
    rect(width / 2, height - 130, 260, 30, 15);
  
    // Add ketchup (red line)
    stroke(255, 0, 0);
    strokeWeight(4);
    line(width / 2 - 130, height - 140, width / 2 + 130, height - 140);
  
    // Add mustard (yellow line)
    stroke(255, 204, 0);
    strokeWeight(4);
    line(width / 2 - 130, height - 120, width / 2 + 130, height - 120);
  
    // Draw tater tots (profile view as small circles below the hotdog)
    fill(255, 204, 102);
    noStroke();
    for (let i = 0; i < 6; i++) {
      let x = width / 2 - 150 + i * 50;
      let y = height - 90;
      ellipse(x, y, 30, 30);
    }
  }