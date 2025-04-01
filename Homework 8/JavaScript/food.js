//this is my food class

class food
{
    constructor(x, y, r,g,b)
    {
        this.x = x;
        this.y = y;
        this.r =r;
        this.g =g;
        this.b =b;
        this.food;
        fill(this.r, this.g, this.b);
        this.food = new Sprite(this.x, this.y,20);
    }
   
}