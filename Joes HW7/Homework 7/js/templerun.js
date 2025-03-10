class Templerun { //capitalize classes
    constructor(path) {
        this.path = path;
        this.myImage = loadImage(this.path, 
            () => console.log("Loaded:", this.path), 
            () => console.error("Failed to load:", this.path)
        );
        this.x = 100;
        this.y = 100;
        this.imageWidth = 20;
        this.imageHeight = 100;
    }

    draw(x, y) {
        this.x = x || this.x;
        this.y = y || this.y;
        image(this.myImage, this.x, this.y, this.imageWidth, this.imageHeight);
    }

    hasCollided(x2, y2, w2, h2) {
        return (
            this.x < x2 + w2 &&
            this.x + this.imageWidth > x2 &&
            this.y < y2 + h2 &&
            this.y + this.imageHeight > y2
        );
    }
}