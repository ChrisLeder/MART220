class animationImage
{

    constructor(x, y, w, h)
    {
        
        this.x = x;
        this.y = y;
        this.w = 50;
        this.h = 75;
        //this.imageObjcts = [];
        //this.loadAnimation();
        this.currentAnimation;
        this.createAnimation();
        //this.i = 0; 
        //this.currentFrameCount = 0;
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
    {//NinjaGirl
        this.currentAnimation = createSprite(50, 75, 50, 75);
    }

    loadAnimation(animationType, fileNames)
    {
       this.currentAnimation.addAnimation(animationType, fileNames[0], fileNames[fileNames.length-1]); 
       //this is the Sprite HitBox
       this.currentAnimation.width = 50;
       this.currentAnimation.height = 75;
       
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
        this.currentAnimation.rotationSpeed = 0;

        if (animationType =='run' && this.direction == 'forward')
            {
                
                this.currentAnimation.direction = 0;
                this.currentAnimation.mirror.x = false;
                this.currentAnimation.velocity.x = 3;

            }
        else if (animationType == 'run' && this.direction == 'reverse')
            {
                
                this.currentAnimation.direction = 180;
                this.currentAnimation.mirror.x = true;
                this.currentAnimation.velocity.x = -3;
            }
            
            else if (animationType == 'run' && this.direction == 'up')
                {
                    
                    this.currentAnimation.direction = 270;                    
                    this.currentAnimation.velocity.y = -3;

            }else if (animationType == 'run' && this.direction == 'down')
                    {
                        
                        this.currentAnimation.direction = 90;                        
                        this.currentAnimation.velocity.y = 3;
                    }
        else
        {
            this.currentAnimation.velocity.x = 0;
            this.currentAnimation.velocity.y = 0;
        }
        
    }

    incrementIndex()
    {
        if (this.currentFrameCount % 5 == 0)
        {this.i++;            
        }
        if (this.i >= this.fileNames.length)
            {
                this.i = 0;
            }
    }

    updatePosition(direction)
    {
        this.direction = direction;
    }

    isColliding(NinjaGirl)
    {
        return this.currentAnimation.collide(NinjaGirl);
    }
}