class animationImage
{

    constructor(fileNames, x, y, w, h)
    {
        this.fileNames =this.fileNames;
        this.x = x;
        this.y = y;
        this.w = 50;
        this.h = 75;
        this.imageObjcts = [];
        //this.loadAnimation();
        this.currentAnimation;
        this.createAnimation();
        this.i = 0; 
        this.currentFrameCount = 0;
        this.direction = "";
        
    }

    getX()
    {
        return this.x;
    }

    setX(x)
    {
        this.x = x;
    }

    setCurrentFrameCount(currentFrameCount)
    {
        this.currentFrameCount = currentFrameCount;
    }

    createAnimation()
    {
        this.currentAnimation = createSprite(50, 75,50 ,75);
    }

    loadAnimation(animationType, fileNames)
    {
       this.currentAnimation.addAnimation(animationType, fileNames[0], fileNames[fileNames.length-1]); 
    }
    updatePosition(direction)
    {
        this.direction = direction;
    }

    drawAnimation(animationType)
    {
        this.currentAnimation.frameDelay = 5;
        this.currentAnimation.scale = 0.25;
        this.currentAnimation.changeAnimation(animationType);

        if (animationType =='run' && this.direction == 'forward')
            {
                this.currentAnimation.mirror.x = false;
                this.currentAnimation.direction = 0;
                this.currentAnimation.velocity.x = 3;

            }
        else if (animationType == 'run'&& this.direction == 'reverse')
            {
                this.currentAnimation.mirror.x = true;
                this.currentAnimation.direction = 180;
                this.currentAnimation.velocity.x = 3;
            }
        else
        {
            this.currentAnimation.velocity.x = 0;
        }
    }
}