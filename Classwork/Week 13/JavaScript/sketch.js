//This is my Creative Coding II Homework 13 on 3D Modeling
//by Chris Leder


var baseImage;
var baseImage1
var texturesCanvas;
var texturedCanvas1;
var sphereX= -400;
var sphereY= 100;
var cylX = -400;
var cylY = -150;
var coneModel;
function preload()
{
img1 = loadImage("../images/image1.jpg");
img2 = loadImage("../images/image2.jpg");
img3 = loadImage("../images/image3.jpg");
img4 = loadImage("../images/image4.jpg");
img5 = loadImage("../images/image5.jpg");

baseImage = loadImage("../images/image5.jpg");
baseImage1 = loadImage("../images/image4.jpg");
coneModel = loadModel("../JavaScript/Cone.obj", true);    

myFont = loadFont('Fonts/Rye-Regular.ttf');

}
function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);

    texturedCanvas = createGraphics(512, 256);
    texturedCanvas.image(baseImage, 0, 0, texturedCanvas.width, texturedCanvas.height);
    texturedCanvas.fill(0,0,255);
    texturedCanvas.textAlign(CENTER, CENTER);
    texturedCanvas.textSize(40);
    texturedCanvas.textFont(myFont);
    texturedCanvas.text("And So It Begins.pt II", texturedCanvas.width / 2, texturedCanvas.height / 2);

    texturedCanvas1 = createGraphics(512, 256);
    texturedCanvas1.image(baseImage1, 0, 0, texturedCanvas1.width, texturedCanvas1.height);
    texturedCanvas1.fill(255,0,0);
    texturedCanvas1.textAlign(CENTER, CENTER);
    texturedCanvas1.textSize(60);
    texturedCanvas1.textFont(myFont);
    texturedCanvas1.text("Chris Leder", texturedCanvas1.width / 2, texturedCanvas1.height / 2);

    
    
}

function draw() {
    background(180, 164, 163);    
    normalMaterial();  

        push();
        scale(2.5);        
        rotateX(frameCount * 0.02); 
        rotateY(frameCount * 0.003);
        rotateZ(frameCount * 0.01);
        texture(img1);     
        model(coneModel);
        pop();
    
    //cylider with text                    
        push();        
        rotateY(frameCount * -0.015);
        translate(cylX, cylY);             
        texture(texturedCanvas);
        cylinder(200, 150, 48, 1, true, true);
        pop();        
        
     if (mouseIsPressed)
            {
            cylX=random(400);
            cylY = random(100); 
            }            
        
        //torus        
            push();            
            rotateX(frameCount * 0.04);
            rotateY(frameCount * 0.05);
            rotateZ(frameCount * 0.001);  
            translate(400,-150);                
            texture(img2);
            torus(50, 30);
            pop();
            

            //Sphere        
            push();            
            rotateX(frameCount * 0.05);
            rotateY(frameCount * 0.03);
            rotateZ(frameCount * 0.001);
            translate(sphereX, sphereY);                
            texture(texturedCanvas1);
            sphere(100,);
            pop();

            if (mouseIsPressed)
                {
                sphereX=random(400);
                sphereY = random(200);
                }
            
            //box        
            push();            
            rotateX(frameCount * 0.001);
            rotateZ(frameCount * 0.03);                  
            texture(img3);
            translate(400, 200);
            box(100,);
            pop();
            
    
}
