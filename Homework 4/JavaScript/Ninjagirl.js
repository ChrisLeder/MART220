
class Ninjagirl {
    

    //constructor
    constructor(x, y, path) {
        //properties
        this.x = x;
        this.y = y;
        this.path = path;
        console.log(path)
        this.img = loadImage(this.path);
    }
    
    getX()
    {
        return this.x;

    }
    getY()
    {
        return this.y;
    }

    draw() {
        image(this.img, this.x, this.y);
    }
}

