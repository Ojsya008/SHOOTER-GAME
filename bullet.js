class Bullet{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.width = 7;
        this.height = 14;
        this.toDelete = false;
    }

    display(){
        noStroke();
        rectMode(CENTER);
        fill("#71c937");
        rect(this.x, this.y, this.width, this.height);
    }

    move(){
        this.y = this.y - 5;
    }

    hits(e){
        var d = dist(this.x, this.y, e.x, e.y);
        if(d < this.height + e.height){
            return true;
        }else{
            return false;
        }
    }

    destroy(){
        this.toDelete = true;
    }
}
