class animationImage
{

    constructor(fileNames, x, y, w, h)
    {
       //this.fileNames =this.fileNames;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
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
        this.x =x;
    }

    setCurrentFrameCount(currentFrameCount)
    {
        this.currentFrameCount = currentFrameCount;
    }

    createAnimation()
    {
        this.currentAnimation = createSprite(300, 250);
    }

    loadAnimation(animationType, fileNames)
    {
       this.currentAnimation.addAnimation(animationType, fileNames[0], fileNames[fileNames.length-1]); 
    }

    drawAnimation(animationType)
    {
        this.currentAnimation.frameDelay = 5;
        this.currentAnimation.scale = 5;
        this.currentAnimation.changeAnimation(animationType);

        if (animationType =='run' && this.direction == 'forward')
            {
                this.currentAnimation.mirror.x = false;
                this.currentAnimation.direction = 0;
                this.currentAnimation.speed = 3;

            }
        else if (animationType == 'run'&& this.direction == 'reverse')
            {
                this.currentAnimation.mirror.x = true;
                this.currentAnimation.direction = 180;
                this.currentAnimation.speed = 3;
            }
        else
        {
            this.currentAnimation.velocity.x = 0;
        }
    }
}