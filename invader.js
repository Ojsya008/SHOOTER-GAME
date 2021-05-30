class Invader{
    constructor(x, y, image){
        this.x = x;
        this.y = y;
        this.width = 50;
        this.height = 25;
        this.image = loadImage(image);
        this.xdir = 1;
    }

    display(){
        imageMode(CENTER);
        image(this.image, this.x, this.y, this.width + 5, this.height + 30);
    }

    move(){
        this.x = this.x + this.xdir;
    }

    shiftDown(){
        this.xdir *= -1;
        this.y += 10;
    }

    destroy(){
        this.toDelete = true;
    }
}