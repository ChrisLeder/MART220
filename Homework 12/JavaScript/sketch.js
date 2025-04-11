

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
}
function preload()
{
img1 = loadImage("../images/image1.jpg");
img2 = loadImage("../images/image2.jpg");
img3 = loadImage("../images/image3.jpg");
img4 = loadImage("../images/image4.jpg");
img5 = loadImage("../images/image5.jpg");
//textureMode(NORMAL);
    /*textureWrap(REPEAT);
    img1.wrapS = REPEAT;
    img1.wrapT = REPEAT;
    img2.wrapS = REPEAT;
    img2.wrapT = REPEAT;
    img3.wrapS = REPEAT;
    img3.wrapT = REPEAT;
    img4.wrapS = REPEAT;
    img4.wrapT = REPEAT;
    img5.wrapS = REPEAT;
    img5.wrapT = REPEAT;*/

    myFont = loadFont('Fonts/Rye-Regular.ttf');
}

function draw() {
    background(180, 164, 163);
    normalMaterial();
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    rotateZ(frameCount * 0.01);
    
    textFont(myFont);
    textSize(50);
    text("Chris Leder", -width/20, -height/30, 0);
    fill('172, 160, 12');
    plane(200, 150);
    translate(-width/2,-height/2,0);
    /*texture(img1);
    box(45);*/
}