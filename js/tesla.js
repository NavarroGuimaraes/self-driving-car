class Tesla{
    constructor(x, y, width, height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height; 

        this.controls = new Controls();
    }

    update(){
        if(this.controls.left){
            this.x -= 1;
        }
        if(this.controls.right){
            this.x += 1;
        }
        // Y coordinates increases downwards in the canvas!!
        // do not change this, dumbass!
        if(this.controls.foward){
            this.y -= 2;
        }
        if(this.controls.reverse){
            this.y += 2;
        }
    }

    draw(context){
        context.beginPath();
        // Draw the car body in the center of the canvas, with the x and y coordinates being its center
        context.rect(this.x-this.width/2,
                     this.y-this.height/2,
                     this.width,
                      this.height);
        context.fill();
    }
}