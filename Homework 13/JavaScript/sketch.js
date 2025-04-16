//This is my Creative Coding II Homework 13 on 3D Modeling
//by Chris Leder


var baseImage;
var texturesCanvas;
var sphereX= -400;
var sphereY= 100;


function preload()
{
img1 = loadImage("../images/image1.jpg");
img2 = loadImage("../images/image2.jpg");
img3 = loadImage("../images/image3.jpg");
img4 = loadImage("../images/image4.jpg");
img5 = loadImage("../images/image5.jpg");
baseImage = loadImage("../images/image5.jpg");


    myFont = loadFont('Fonts/Rye-Regular.ttf');
}
function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);

    texturedCanvas = createGraphics(512, 256);
    texturedCanvas.image(baseImage, 0, 0, texturedCanvas.width, texturedCanvas.height);
    texturedCanvas.fill(126, 12, 112);
    texturedCanvas.textAlign(CENTER, CENTER);
    texturedCanvas.textSize(50);
    texturedCanvas.textFont(myFont);
    texturedCanvas.text("And So It Begins...", texturedCanvas.width / 2, texturedCanvas.height / 2);

    
    
}

function draw() {
    background(180, 164, 163);
    
    normalMaterial();   
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
    

    //cylider with text 
                   
        push();        
        rotateY(frameCount * -0.01);
        translate(-400,-150);             
        texture(texturedCanvas);
        cylinder(200, 150, 48, 1, true, true);
        pop();        
        
     if (mouseIsPressed)
            {
            push();
            translate(random(400), random(100), random(-100));
            rotateY(frameCount * -0.01);             
            texture(texturedCanvas);
            cylinder(200, 150, 48, 1, true, true);
            pop();
            
    }
        
            
        
        //torus
        
            push();
            translate(400,-150);
            rotateX(frameCount * 0.01);
            rotateY(frameCount * 0.01);
            rotateZ(frameCount * 0.01);                  
            texture(img1);
            torus(50, 30);
            pop();
            

            //Sphere
        
            push();
            translate(sphereX, sphereY);
            rotateX(frameCount * 0.01);
            rotateY(frameCount * 0.01);
            rotateZ(frameCount * 0.01);                  
            texture(img2);
            sphere(100,);
            pop();

            if (mouseIsPressed)
                {

                sphereX=random(400);
                sphereY = random(200);

                /*push();
                translate(random(), random(400), random(100));
                rotateY(frameCount * -0.01);             
                texture(img2);
                sphere(200);
                pop();*/
                
        }
            
            //box
        
            push();
            translate(400, 200);
            rotateX(frameCount * 0.01);                  
            texture(img3);
            box(100,);
            pop();
            
    
}
