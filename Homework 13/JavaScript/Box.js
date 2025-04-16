class Box extends threeDShape
{
constructor(x, y, z, speedX, speedY, speedZ, width, height, depth, path) 
{
    super(x, y, z, speedX, speedY, speedZ);
    
    this.width = width;
    this.height = height;
    this.depth = depth;
    this.speedX = speedX;
    this.speedY = speedY;
    this.speedZ = speedZ;
    this.img3= loadImage(path);
  }

  draw()
  {
    push();
    super.moveShape();
    texture(img3);
    box(this.width, this.height, this.depth);
    pop();
  }
}
