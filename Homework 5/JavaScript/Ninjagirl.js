
class Ninjagirl
{
//constructor
constructor(path,x,y)
{
    this.path = path;
    this.img = loadImage(this.path);
    this.x = x;
    this.y = y;
    this.imageWidth =100;
    this.imageHeight = 150;    
}

draw()
{
 image(this.img, this.x, this.y, 100, 150);   
}
hasCollided(x2,y2,w2,h2){
    return(
        this.x < x2 + w2 &&
        this.x + this.imageWidth > x2 &&
        this.y < y2 + h2 &&
        this.y + this.imageHeight > y2
    );
}


}