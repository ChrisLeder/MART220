
class Ninjagirl
{
//constructor
constructor(path,x,y)
{
    this.path = path;
    this.img = loadImage(this.path);
    this.x + x;
    this.y = y;
    this.imageWidth =75;
    this.imageHeight = 100;    
}

draw()
{
 image(this.myImage,this.x, this.y, 75, 100);   
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