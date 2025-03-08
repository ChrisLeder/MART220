// This is my Character Class
class Ninjagirl
{
//constructor(path,x,y)
constructor(path,x,y)
{
    this.path = path;
    this.img = loadImage(this.path);
    this.x = x;
    this.y = y;
    this.imageWidth =50;
    this.imageHeight = 75; 
    this.flipX = false;   
}

draw()
{
    push();
    if (this.flipX){
        translate(this.imageWidth, 0);
        scale(-1.0, 1.0);
        image(this.img, -this.x, this.y, 50, 75);
    }
    else{
 image(this.img, this.x, this.y, 50, 75);   
}
    pop();
}



}
