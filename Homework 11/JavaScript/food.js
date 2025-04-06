//this is my food class

class food
{
    constructor(x, y, isGood)
    {
        this.x = x;
        this.y = y;
        this.isGood= isGood;                
        this.food = new Sprite(this.x, this.y, 20);
        
        if (this.isGood){
        this.food.color="blue";}
        else {
        this.food.color="red"}
    }
   
}