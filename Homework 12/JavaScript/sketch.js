


function preload()
{
img1 = loadImage("../images/image1.jpg");
img2 = loadImage("../images/image2.jpg");
img3 = loadImage("../images/image3.jpg");
img4 = loadImage("../images/image4.jpg");
img5 = loadImage("../images/image5.jpg");


    myFont = loadFont('Fonts/Rye-Regular.ttf');
}
function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);

    
    
}

function draw() {
    background(180, 164, 163);
    
    normalMaterial(); {  
    //plane with text
    push();
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    rotateZ(frameCount * 0.01);    
    textFont(myFont);
    textSize(50);
    fill('172, 160, 12');
    text("Chris Leder", -width/20, -height/30, 0);    
    texture(img4);
    plane(200, 150);
    pop();
    }

    //cylider with text 
    {               
        push();
        translate(-400,-150);
        rotateY(frameCount * 0.01); 
        /*textFont(myFont);
    textSize(50);
    fill('172, 160, 12');
    text("And So It Begins", -width/20, -height/30, 0);*/      
        texture(img5);
        cylinder(200, 150, 24, 24, true, true);
        pop();
        }
        //torus
        {
            push();
            translate(400,-150);
            rotateX(frameCount * 0.01);
            rotateY(frameCount * 0.01);
            rotateZ(frameCount * 0.01);                  
            texture(img1);
            torus(50, 30);
            pop();
            }

            //Sphere
        {
            push();
            translate(-400, 200);
            rotateX(frameCount * 0.01);
            rotateY(frameCount * 0.01);
            rotateZ(frameCount * 0.01);                  
            texture(img2);
            sphere(100,);
            pop();
            }
            //box
        {
            push();
            translate(400, 200);
            rotateX(frameCount * 0.01);                  
            texture(img3);
            box(100,);
            pop();
            }
    
}