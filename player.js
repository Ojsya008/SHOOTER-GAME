
class Player{
    constructor(){
        this.spwan = {
            x: width/2,
            y: height - 40
        };
        this.x = this.spwan.x;
        this.y = this.spwan.y;
        this.width = 50;
        this.height = 25;
        this.image = loadImage('img/Player.png');
    }

    display(){
        imageMode(CENTER);
        image(this.image, this.x, this.y, this.width + 40, this.height + 40);
    }
    
    move(dir){
        this.x += 5*dir;
    }
}