
/*
This is my Creative Coding II HW 4 project
*/
let animation = [];
let myNinjagirl;
let i = 0;

function preload() {
    for (let i = 0; i < 10; i++)

        // concatenation - adding strings together
        myNinjagirl = new ninjagirl("../images/NinjaGirl/png/Idle__00" + i + ".png");
    animation.push(myNinjagirl);


    function setup() {
        createCanvas(800, 800);

        myNinjagirl = new ninjagirl(400, 200);
        setInterval(updateIndex, 50);
    }

    function draw() {

        background(120);
        image(animation[i], 100, 100);
        animation[i].draw();
        myNinjagirl.draw();
    }
}

