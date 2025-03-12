//This is my sktch.js pag for p5play

var idlePaths = [];
var runPaths = [];
var myAnimation;
var myRunAnimation;


function preload()
{
    idlePaths = loadStrings("../images/NinjaGirl/idle.txt");
    runPaths = loadStrings("../images/NinjaGirl/run.txt");
}

function setup()
{
    createCanvas(800, 650);
    myAnimation =new animationImage(idlePaths, 0, 0, 150, 150);
    myAnimation.loadAnimation('idle', idlePaths);
    myAnimation.loadAnimation('run', runPaths);
}

function draw()
{
    background(13, 152, 34);

    if(keyIsPressed)
    {
        if(key == 'd')
            {
                myAnimation.drawAnimation('run');
            }
        else
        {
            myAnimation.drawAnimation('idle');
        }
    }
    else
    {
        myAnimation.drawAnimation('idle');
    }

   /* myAnimation.updatePosition('idle');
    myAnimation.stCurrentFramCount(frameeCount);
    myAnimation.drawAnimation();*/


    //animation(sprite, 400, 325);
}