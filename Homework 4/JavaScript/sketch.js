
/*
This is my Creative Coding II HW 4 project
*/
let animation = [];
let myNinjagirl;
let i = 0;

function preload() {
    for (let i = 0; i < 10; i++) {
        // concatenation - adding strings together
        myNinjagirl = new Ninjagirl(100, 100, "../images/NinjaGirl/png/Idle__00" + i + ".png");
        animation.push(myNinjagirl);
    }

}
function setup() {
    createCanvas(800, 800);
    setInterval(updateIndex, 50);
}

function draw() {

    background(120);
    animation[i].draw();
}
function updateIndex() {
    i++;
    if (i > 9) {
        i = 0;
    }
}