//this is my badfood class

class badfood
{
    constructor(x, y)
    {
        this.x = x;
        this.y = y;
    }
    draw()
    {
        fill(100, 140, 43);
        circle(this.x, this.y, 25);
    }
}