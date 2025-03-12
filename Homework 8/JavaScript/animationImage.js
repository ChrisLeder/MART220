class animationImage
{

    constructor(fileNams, x, y, w, h)
    {
       //this.fileNames =this.fileNames;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.imageObjcts = [];
        //this.loadAnimation();
        this.createAnimation();
        this.i = 0; 
        this.currentFrameCount = 0;
        this.direction = "";
        this.currentAnimation;
    }

    getX()
    {
        return this.x;
    }

    setX(x)
    {
        this.x =x;
    }

    setCurrentFrameCount(currentFrameCount)
    {
        this.currentFrameCount = currentFrameCount;
    }

    createAnimation()
    {
        this.curreentAnimation = createSprite(300, 250);
    }

    loadAnimation(animationType, fileNames)
    {
       this.currentAnimation.addAnimation(animationType, fileNames[0], fileNames[fileNames.length-1]); 
    }

    drawAnimation(animationType)
    {
        this.currentAnimation.frameDelay = 5;
        this.currentAnimation.changeAnimation(animationType);
    }
}