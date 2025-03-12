//This is my sketch.js page for p5play

var idlePaths = [];
var runPaths = [];
var myAnimation;
var myRunAnimation;
//var someImage;


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

    //compact way to add someImage
    /*someeImage =createSprite(450, 200, 100, 100, 'static');
    someImage.img = "./images/some.jpg";
    someImage.scale = 0.05;
    someImage.diameter = 150;*/
}

function draw()
{
    background(13, 152, 34);

    if(kb.pressing('d'))
    {
        if(key == 'd')
            {
                myAnimation.updatePosition('forward');
                myAnimation.drawAnimation('run');
                if(myAnimation.isColliding(someImage))
                {
                    myAnimation.drawAnimation('idle');
                    myAnimation.updatePosition('idle');
                }
            }
        else if(kb.pressing('a'))
        {
            myAnimation.updatePosition('reverse');
            myAnimation.drawAnimation('run');
            if(myAnimation.isColliding(someImage))
                {
                    myAnimation.drawAnimation('idle');
                    myAnimation.updatePosition('idle');
                }
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