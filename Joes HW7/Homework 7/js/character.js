class Character {
    constructor(path, x, y) {
        this.path = path;
        this.myImage = loadImage(this.path, 
            () => console.log("Loaded:", this.path), 
            () => console.error("Failed to load:", this.path)//debugging
        );
        this.x = x;
        this.y = y;
        this.imageWidth = 40;
        this.imageHeight = 60;
    }

    draw() {
        image(this.myImage, this.x, this.y, this.imageWidth, this.imageHeight);
    }

    hasCollided(x2, y2, w2, h2) {
        return (
            this.x < x2 + w2 &&
            this.x + this.imageWidth > x2 &&
            this.y < y2 + h2 &&//h2 not yh
            this.y + this.imageHeight > y2
        );
    }
}