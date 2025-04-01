//This is my CC II HW 7

var animation = [];
var runAnimation = [];
let i = 0;
var myNinjagirl;
var myFood;
var x = 100;
var y = 100;
var foodArray = [];
var foodFound = false;
var result = [];
var runresult = [];
var score = 5;
var timeRemaining = 0;
var counter = 0;
var timeLeft = 30;
var timeremaining = 0;
var keyIsPressed = true;
var flipX= false;
var bgmusic;


function preload() 
{   //SOUNDS
    //soundFormats("wav");
    //background music
    bgmusic = loadSound("Audio/bgMusic.wav");
    //eat food sound
    eat = loadSound("Audio/yum.wav");
    //eat bad food sound
    retch = loadSound("Audio/retching.wav");
    //animation strings
    result = loadStrings('Data/idle.txt');
    runresult = loadStrings('Data/run.txt');
}

function setup() 
{
     createCanvas(800, 650);    

    setInterval(foodFight, 5000);
    
    var interval = setInterval(countDown, 1000);

    function countDown() {
        counter++;
        timeLeft--;
        if  (timeLeft== 0) {
            clearInterval(interval);
        }
    }    

    setInterval(updateIndex, 50);
    for (let i = 0; i < 5; i++) {
        myFood = new food(random(100, 600), random(100, 600),  34, 86, 214, 50);
        foodArray.push(myFood);}

        for (let i = 0; i < 5; i++) {
            myFood = new food(random(100, 600), random(100, 600),  100, 140, 43, 50);
            foodArray.push(myFood);
    }

    for (let i = 0; i < result.length; i++) {
        //concatenation- adding strings together 
        //idle animation          
        myNinjagirl = new Ninjagirl(result[i], x, y);
        animation.push(myNinjagirl);
        //Run animation
        myNinjagirl = new Ninjagirl(runresult[i], x, y);
        runAnimation.push(myNinjagirl);
    }
    bgSound();//this is in setup function
}

function loadFood()
    {
for (let i = 0; i < foodArray.length; i++) 
        {
        foodArray[i].draw();
        }
    }
    function foodFight(){
        for (let i = 0; i < foodArray.length; i++) 
            {
            foodArray[i].x = random(100, 600);
            foodArray[i].y= random(100, 600);
            }
            
    }
    

    function bgSound(){
        bgmusic.play();
        bgmusic.loop();
        bgmusic.setVolume(0.1);
        userStartAudio();
    }

function draw() 
{
    background(236, 232, 25);    
    loadFood();

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
    if (timeLeft== 0) {
        stroke(15);
        fill(214, 35, 20);        
        textSize(60);
        text('Game Over', 225, 60);
    }    
    if (score == 0){
        stroke(15);
        fill(214, 35, 20);        
        textSize(80);
        text('You Died!!!', 225, 400); 
        textSize(60);
        text('Game Over', 225, 60);
    }
    if (score == 10){
        stroke(15);
        fill(214, 35, 20);        
        textSize(80);
        text('You Win!!!', 225, 400); 
        textSize(60);
        text('Game Over', 225, 60);}

    //animation    
    if (keyIsPressed)
        {
        runAnimation[i].draw();

        if (key == "a") {
            x = x - 3;
            flipX = true;
        }
        if (key == "d") {
            x = x + 3;
            flipX = false;
        }
        if (key == "w") {
            y = y - 3;
        }
        if (key == "s") {
            y = y + 3;
        }
        
        for (let i = 0; i < animation.length; i++) 
            {
            animation[i].flipX = flipX;
            animation[i].x = x;
            animation[i].y = y;
            }

        for (let i = 0; i < runAnimation.length; i++) 
            {
            runAnimation[i].flipX = flipX;
            runAnimation[i].x = x;
            runAnimation[i].y = y;
            }


        for (let k = 0; k < foodArray.length; k++) 
            {
            //if (animation[i].hasCollided(foodArray[k].x, foodArray[k].y, 10, 10)) 
            if(collideRectCircle(animation[i].x, animation[i].y, animation[i].imageWidth, animation[i].imageHeight, foodArray[k].x, foodArray[k].y, 10, 10 ))
                {
                    if (foodArray[k].r==34){
                        eat.play();
                        score = score + 1;
                    }
                    else{
                        retch.play();
                        score= score - 1;

                    }

                foodArray.splice(k, 1);               
                
                }
            }
    }

    else 
    {
        animation[i].draw();
    } 
    if ( timeLeft== 0 || score == 0){
        keyIsPressed = false;
    }
    if (score == 10){
        keyIsPressed = false;
    }
    
}

function updateIndex() 
{
    i += 1;
    if (i > result.length - 1
    ) { i = 0; }
}