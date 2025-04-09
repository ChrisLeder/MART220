//this is my BadNinja class

class BadNinja
{
    constructor(x, y, path)
    {
        this.x = x;
        this.y = y;
        this.path = path;              
        this.someImage = createSprite(random(100, 600), random(100, 600), 50, 75, 'static');
        this.someImage.img = path;
        this.someImage.scale = 0.25;
        this.someImage.diameter = 150; 
    }
   
}