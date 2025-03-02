//This is my CC II HW 6

var animation = [];
var runAnimation = [];
var i = 0;
var myNinjagirl;
var myFood;
var x = 100;
var y = 100;
var foodArray = [];
var foodFound = false;
var result = [];
var runresult = [];
var score = 0;
var timeRemaining = (timeLeft - counter);
var counter = 0;
var timeLeft = 10;
var timeremaining = 0;

function convertSeconds(s) 
{
    var min = floor(s / 60);
    var sec = s % 60;
    return nf(min, 2) + ":" + nf(sec, 2);
}

function preload() 
{
    result = loadStrings('Data/idle.txt');
    runresult = loadStrings('Data/run.txt');
}

function setup() 
{

    createCanvas(800, 650);

    var timeRemaining = select('#timeremaining');
    timeRemaining.html(convertSeconds(timeLeft - counter));
    var interval = setInterval(countDown, 1000);

    function countDown() {
        counter++;
        timeRemaining.html(convertSeconds(timeLeft - counter));
        if (counter == timeLeft) {
            clearInterval(interval);
        }

    }

    setInterval(updateIndex, 50);
    for (let i = 0; i < 20; i++) {
        myFood = new food(random(100, 600), random(100, 600), 50);
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
}

function draw() 
{
    background(236, 232, 25);    

    //Score
    fill(214, 35, 20);
    stroke(3);
    rect(35, 30, 50, 30);
    fill(214, 35, 20);
    stroke(3);
    textSize(24);
    text('Score', 25, 25);
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
    text(timeRemaining, 705, 55);

    if (counter == timeLeft) {
        stroke(15);
        fill(214, 35, 20);        
        textSize(60);
        text('Game Over', 225, 60);
    }

    for (let i = 0; i < foodArray.length; i++) 
        {
        foodArray[i].draw();
        }

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
            if (animation[i].hasCollided(foodArray[k].x, foodArray[k].y, 10, 10)) 
                {
                foodArray.splice(k, 1);               
                score = score + 1;
                }
            }
    }

    else 
    {
        animation[i].draw();
    }    

}

function updateIndex() 
{
    i += 1;
    if (i > result.length - 1
    ) { i = 0; }
}