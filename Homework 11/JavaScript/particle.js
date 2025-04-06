class Particle {

    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.vx = random(-1, 1);
      this.vy = random(-5, -1);
      this.alpha = 255;
    }
  
    finished() {
      return this.alpha < 0;
    }
  
    update() {
      this.x += this.vx;
      this.y += this.vy;
      this.alpha -= 5;
    }
  
    show() {
      noStroke();      
      fill(255, this.alpha);
      ellipse(this.x, this.y, 16);
    }
  
  }

  for (let i= 0; i <5; i++)
    {
        let p = new Particle();
        particles.push(p);
    }
    for (let i = particles.length - 1; i>=0; i--)
    {
        particles[i].update();
        particles[i].show();
        if (particles[i].finished())
            particles.splice(i, 1);
    }
  