
class Star{
    constructor(x, y, r){
        this.x = x;
        this.y = y;
        this.r = r;
    }

    display(){
        noStroke();
        ellipseMode(RADIUS);
        fill("white");
        ellipse(this.x, this.y, this.r, this.r)
    }
}