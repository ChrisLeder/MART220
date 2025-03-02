//This is my CC II HW 6

var  animation = [];
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

function preload()
{
result = loadStrings('Data/idle.txt');
runresult = loadStrings('Data/run.txt');    

}

function setup()
{
    createCanvas(800,700);

    setInterval(updateIndex, 50);
    for (let i = 0; i < result.length; i++){
        myFood = new food(random(100, 600), random(100, 600), 50);
        foodArray.push(myFood);
    }

    for (let i = 0; i < result.length; i++)
        {
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
        background (236, 232, 25);
        
       
        
        for (let i = 0; i < foodArray.length; i++)
        {
            foodArray[i].draw();
        }

        if (keyIsPressed)        {

            runAnimation[i].draw();

            

            if (key == "a"){
                x= x-3;
                flipX = true;
               
            }
            if (key == "d"){
                x=x+3;
                flipX = false;
            }
            if (key == "w"){
                y=y-3;
            }
            if (key == "s"){
                y=y+3;
            }
            
            for (let i = 0; i < animation.length; i++){
                animation[i].flipX = flipX;
                animation[i].x = x;
                animation[i].y = y;
            }

            for (let i = 0; i < runAnimation.length; i++){
                runAnimation[i].flipX = flipX;
                runAnimation[i].x = x;
                runAnimation[i].y = y;
            }
            

            for (let k=0; k < foodArray.length; k++){
                if (animation[i].hasCollided(foodArray[k].x, foodArray[k].y, 25, 25)) {
                    foodArray.splice(k, 1); 
            }
        }}
    
    else{
        animation[i].draw();
    }
}

    function updateIndex(){
        i += 1;
        if (i > result.length - 1
        )
        {i = 0;}
    }