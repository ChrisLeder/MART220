//this is my food class

class food
{
    constructor(x, y)
    {
        this.x = x;
        this.y = y;
    }
    draw()
    {
        fill(34, 86, 214);
        circle(this.x, this.y, 25);
    }
}