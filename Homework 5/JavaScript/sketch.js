//This is my CC II HW 5

var  animation = [];
var runAnimation = [];
var i = 0;
var myNinjagirl;
var myFood;
var x = 100;
var y = 100;
var foodArray = [];
var foodFound = false;

function preload()
{
    for (var i = 0; i < 10, i++;)
    {
        //concatenation- adding strings together           
        myNinjagirl = new Ninjagirl("../images/Ninjagirl/Run_00" + i + ".png", x, y);
        animation.push(myNinjagirl);
    }

}
function setup()
{
    createCanvas(800,800);
    setInterval(updateIndex, 30);
    for (let i = 0; i < 5; i++){
        myFood = new food(random(100, 600), random(100, 600), 50);
        foodArray.push(myFood);
    }
}
function draw()
    {
        background (236, 232, 25);
        
        animation[i].draw();
        for (let i = 0; i < foodArray.length; i++)
        {
            foodArray[i].draw();
        }

        if (keyIsPressed)
        {
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
            for (let i = 0; i < 10; i++){
                animation[i].x = 150;
                animation[i].y = 200;
            }
            

            for (let k=0; k < foodArray.length; k++){
                if (animation[i].hasCollided(foodArray[k].x, foodArray[k].y, 25, 25)) {
                    foodArray.splice(k, 1); 
            }
        }
    }
    }
    function updateIndex(){
        i++;
        if (i >9)
        {i = 0;}
    }