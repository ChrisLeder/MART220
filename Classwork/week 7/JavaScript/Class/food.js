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
    }
    draw()
    {
        fill(this.r, this.b, this.b);
        circle(this.x, this.y, 25);
    }
}