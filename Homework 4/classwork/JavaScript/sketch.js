var animation = [];
var i = 0;
var myPopcorn;
function preload() {
    

    //myPopcorn = new popcorn("../images/Idle__000.png");
    for (var i = 0; i < 10; i++) {
        // concatenation - adding strings together
        myPopcorn = new popcorn("../images/Idle__00" + i + ".png");
        animation.push(myPopcorn);
    }

    /*animation.push(loadImage("../images/Idle__000.png"));
    animation.push(loadImage("../images/Idle__001.png"));
    animation.push(loadImage("../images/Idle__002.png"));
    animation.push(loadImage("../images/Idle__003.png"));
    animation.push(loadImage("../images/Idle__004.png"));
    animation.push(loadImage("../images/Idle__005.png"));
    animation.push(loadImage("../images/Idle__006.png"));
    animation.push(loadImage("../images/Idle__007.png"));
    animation.push(loadImage("../images/Idle__008.png"));
    animation.push(loadImage("../images/Idle__009.png"));
    */
}

function setup() {
    createCanvas(800, 800);
    setInterval(updateIndex, 50);
}

function draw() {

    background(120);
    //image(animation[i], 100,100);
    animation[i].draw();
    //myPopcorn.draw();
}

function updateIndex() {
    i++;
    if (i > 9) {
        i = 0;
    }

}