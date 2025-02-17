
class Ninjagirl {

    //constructor
    constructor(x, y) {
        //properties
        this.x = x;
        this.y = y;
        this.path = path;
        this.img = loadImage(this.path);
    }

    draw() {
        image(this.image, this.x, this.y);
    }
}

