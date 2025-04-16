class Torus extends threeDShape 
{
    constructor(x, y, z, speedX, speedY, speedZ, radius, tubeRadius,path) {
        super(x, y, z, speedX, speedY, speedZ);
        this.radius = radius;
        this.tubeRadius = tubeRadius;
        this.img2= loadImage(path);
    }

    draw() {
        push();
        super.moveShape();
        texture(img2);
        torus(this.radius, this.tubeRadius);
        pop();
    }
}