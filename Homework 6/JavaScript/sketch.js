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
    createCanvas(800,800);
    setInterval(updateIndex, 30);
    for (let i = 0; i < result.length; i++){
        myFood = new food(random(100, 600), random(100, 600), 50);
        foodArray.push(myFood);
    }
console.log (result.length)
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
        
       
        console.log (foodArray.length)
        for (let i = 0; i < foodArray.length; i++)
        {
            foodArray[i].draw();
        }

        if (keyIsPressed)

        {

            runAnimation[i].draw();
            if (key == "a"){
                x--;
            }
            if (key == "d"){
                x++;
            }
            if (key == "w"){
                y--;
            }
            if (key == "s"){
                y++;
            }
            for (let i = 0; i < animation.length; i++){
                animation[i].x = x;
                animation[i].y = y;
            }

            for (let i = 0; i < runanimation.length; i++){
                runanimation[i].x = x;
                runanimation[i].y = y;
            }
            

            for (let k=0; k < foodArray.length; k++){
                if (animation[i].hasCollided(foodArray[k].x, foodArray[k].y, 25, 25)) {
                    foodArray.splice(k, 1); 
            }
        }
    }
    else{
        animation[i].draw();
    }
    }
    function updateIndex(){
        i++;
        if (i > result.length - 1
        )
        {i = 0;}
    }