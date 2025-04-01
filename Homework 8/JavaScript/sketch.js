//This is my sketch.js page for p5play

var idlePaths = [];
var runPaths = [];
var myAnimation;
var myRunAnimation;
var someImage;
var myFood;
var x = 100;
var y = 100;
var foodArray = [];
var score = 5;
var timeRemaining = 0;
var counter = 0;
var timeLeft = 30;;
var bgmusic;
var rotationSpeed = 0;
var i = 0;


function preload()
{
    //sound
    bgmusic = loadSound("Audio/bgMusic.wav");
    eat = loadSound("Audio/yum.wav");
    retch = loadSound("Audio/retching.wav");
    //Character animation
    idlePaths = loadStrings("../images/NinjaGirl/idle.txt");
    runPaths = loadStrings("../images/NinjaGirl/run.txt");
}

function setup()
{
    createCanvas(800, 650);

    setInterval(foodFight, 5000);      

    setInterval(countDown, 1000);        
        
        function countDown() {
            counter++;
            timeLeft--;
            if  (timeLeft <= 0) {
                timeLeft = 0;
                bgmusic.stop();               
                
            }
        }
    
    for (let i = 0; i < 5; i++) 
        {
        myGoodFood = new food(random(100, 600), random(100, 600), 34, 86, 214);       
        foodArray.push(myGoodFood);
        //myGoodFood.diameter = 25
        ;
        }       

    for (let i = 0; i < 5; i++) 
        {
        myBadFood = new food(random(100, 600), random(100, 600),  100, 140, 43);
        foodArray.push(myBadFood);
        //myBadFood.diameter = 25;                  
        }

    myAnimation =new animationImage(0, 0, 50, 75);
    myAnimation.loadAnimation('idle', idlePaths);
    myAnimation.loadAnimation('run', runPaths);

    //compact way to add someImage
    for (let i = 0; i <3; i ++){
    someImage =createSprite(random(100, 600), random(100, 600), 50, 75, 'static');
    someImage.img = "./images/BadNinja/Idle__000.png";
    someImage.scale = 0.25;
    someImage.diameter = 150;
    }
    bgSound();
    foodFight();
}
function bgSound(){
    bgmusic.play();
    bgmusic.loop();
    bgmusic.setVolume(0.1);
    userStartAudio();        
}
    function foodFight()
    {
        for (let i = 0; i < foodArray.length; i++) 
            {
            foodArray[i].x = random(100, 600);
            foodArray[i].y= random(100, 600);
            }
            
    }
    function eatFood()
    {
        for (let i = foodArray.length - 1; i >= 0; i--) 
            {
            if (myAnimation.isColliding(foodArray[i].food)) 
                {
                if (foodArray[i].r === 34   &&  
                    foodArray[i].g === 86 &&
                    foodArray[i].b === 214)
                {                    
                    eat.play();
                    score++;
                } else {
                    retch.play();
                    score--;
                }
                foodArray[i].food.remove(); // Remove the food that was eaten
            }
        }
    }

if (score < 0) {
    score = 0;
}  

function draw()
{
    background(13, 152, 34);           

     //Score
     fill(214, 35, 20);
     stroke(3);
     rect(35, 30, 50, 30);
     fill(214, 35, 20);
     stroke(3);
     textSize(24);
     text('Health', 25, 25);
     fill(0);
     text(score, 48, 55);
 
     //timer
     fill(214, 35, 20);
     stroke(3);
     textSize(24);
     text('Time Remaining', 610, 25);
     fill(214, 35, 20);
     stroke(3);
     rect(680, 30, 70, 30);
     fill(0);
     text(timeLeft, 705, 55);

     //Game Text
     if (timeLeft== 0) 
        {
         stroke(15);
         fill(214, 35, 20);        
         textSize(60);
         text('Game Over', 225, 60);
        }    
     if (score == 0)
        {
         stroke(15);
         fill(214, 35, 20);        
         textSize(80);
         text('You Died!!!', 225, 400); 
         textSize(60);
         text('Game Over', 225, 60);
        }
     if (score == 10)
        {
         stroke(15);
         fill(214, 35, 20);        
         textSize(80);
         text('You Win!!!', 225, 400); 
         textSize(60);
         text('Game Over', 225, 60);
        }

       
    if(kb.pressing('d'))
    {
        if(kb.pressing('d'))
        {
            myAnimation.updatePosition('forward');
            myAnimation.drawAnimation('run');
            if(myAnimation.isColliding(someImage))
                {
                    myAnimation.drawAnimation('idle');
                    myAnimation.updatePosition('idle');
                }
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
        else if(kb.pressing('w'))
            {
            myAnimation.updatePosition('up');
            myAnimation.drawAnimation('run');
            if(myAnimation.isColliding(someImage))
                {
                    myAnimation.drawAnimation('idle');
                    myAnimation.updatePosition('idle');
                }
            }    
        else if(kb.pressing('s'))
        {
            myAnimation.updatePosition('down');
            myAnimation.drawAnimation('run');
            if(myAnimation.isColliding(someImage))
                {
                    myAnimation.drawAnimation('idle');
                    myAnimation.updatePosition('idle');
                }
            }
    else
    {
        myAnimation.drawAnimation('idle');
    }
    eatFood();
   

    if (timeLeft <= 0 || score <= 0 || score >= 10) {
        return;
    }
}
