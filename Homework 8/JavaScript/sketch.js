//This is my sktch.js pag for p5play

var idlePaths = [];

function preload()
{
    idlePaths = loadStrings("")
}

function setup()
{
    createCanvas(800, 650);
    myAnimation =new animationImage(idlePaths, 0, 0, 150, 150);
}

function draw()
{
    background(13, 152, 34);

    myAnimation.updatePosition('idle');
    myAnimation.stCurrentFramCount(frameeCount);
    myAnimation.drawAnimation();


    //animation(sprite, 400, 325);
}