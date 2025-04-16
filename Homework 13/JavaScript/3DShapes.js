class threeDShape {
    constructor(x, y, z, speedX, speedY, speedZ) {
      this.x = x;
      this.y = y;
      this.z = z;
      this.speedX = speedX;
      this.speedY = speedY;
      this.speedZ = speedZ;

    }
  
    moveShape()
    {
        translate(this.x, this.y, this.z);
        rotateX(frameCount * this.speedX);
        rotateY(frameCount * this.speedY);
        rotateZ(frameCount * this.speedZ);
       
    }
  }