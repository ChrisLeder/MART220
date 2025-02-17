
class myCircle 
{
    constructor(x, y, diameter, redColor, greenColor, blueColor) {
        this.x = x;
        this.y = y;
        this.diameter = diameter;
        this.redColor = redColor;
        this.greenColor = greenColor;
        this.blueColor = blueColor;
    }

    draw() {
        fill(this.redColor, this.greenColor, this.blueColor);
        circles(this.x, this.y, this.diameter);

    }

}// declare a circle array
var mycircle;
var circles = [];
/*
myCircles[0] = circle1 = new myCircle(100, 100, 25, 120, 34, 100);
myCircles[1] =  circle2 = new myCircle(200, 200, 125, 220, 134, 10);
*/

function preload(){



}
function setup() 
{
    createCanvas(800, 600);
    //instance of myCircle class
    for(var i = 0; i<10; i++)
    {
        mycircle = new myCircle(random(10, width),random(20,height),random(5,150));
        circles[i] = mycircle;
    }
}

function draw() {
    background(0);
    for(var i = 0; i < circles.length; i++)
    {
    circles[i].draw();
    }
   
}
