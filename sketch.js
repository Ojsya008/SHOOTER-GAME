var player;
var invaders = [];
var invaders1 = [];
var invaders2 = [];
var Ammo = [];
var stars = [];
var gameState = 1;
var button;


function setup(){
    createCanvas(width*3.5 - 90, height*2 - 200)
    player = new Player();
    
    for(var i = 0; i < 500; i++){
        var rand = random(1.5, 2);
        var randX = Math.round(random(0, width ));
        var randY = Math.round(random(0, height));
        stars[i] = new Star(randX, randY, rand);
}
for(var i = 0; i < 10; i++){
    invaders[i] = new Invader(80+i*80, 70, 'img/Enemy1.png');
}
for(var i = 0; i < 10; i++){
    invaders1[i] = new Invader(80+i*80, 140, 'img/Enemy2.png');
}
for(var i = 0; i < 10; i++){
    invaders2[i] = new Invader(80+i*80, 210, 'img/Enemy3.png');
}
}

function draw(){
    background(0);
        player.display();
        var edge = false;
        for(var i = 0; i < invaders.length; i++){
            invaders[i].display();
            invaders[i].move();
            if(invaders[i].x > width || invaders[i].x < 0){
                edge = true;
            }
        }

        if(edge){
            for(var i = 0; i < invaders.length; i++){
                invaders[i].shiftDown();
            }   
        }

        var edge1 = false;
        for(var i = 0; i < invaders1.length; i++){
            invaders1[i].display();
            invaders1[i].move();
            if(invaders1[i].x > width || invaders1[i].x < 0){
                edge1 = true;
            }
        }

        if(edge1){
            for(var i = 0; i < invaders1.length; i++){
                invaders1[i].shiftDown();
            }
        }
        
        var edge2 = false;
        for(var i = 0; i < invaders2.length; i++){
            invaders2[i].display();
            invaders2[i].move();
            if(invaders2[i].x > width || invaders2[i].x < 0){
                edge2 = true;
            }
        }

        if(edge2){
            for(var i = 0; i < invaders2.length; i++){
                invaders2[i].shiftDown();
            }
        }

        for(i = 0; i < Ammo.length; i++){
            Ammo[i].display();
            Ammo[i].move();
            for(var j = 0; j < invaders.length; j++){
                if(Ammo[i].hits(invaders[j])){
                    Ammo[i].destroy();
                    invaders[j].destroy();
                }
            }
            for(var j1 = 0; j1 < invaders1.length; j1++){
                if(Ammo[i].hits(invaders1[j1])){
                    Ammo[i].destroy();
                    invaders1[j1].destroy();
                }
            }
            for(var j2 = 0; j2 < invaders2.length; j2++){
                if(Ammo[i].hits(invaders2[j2])){
                    Ammo[i].destroy();
                    invaders2[j2].destroy();
                }
            }
        }

        for(var i = 0; i < Ammo.length; i++){
            if(Ammo[i].toDelete){
                Ammo.splice(i, 1);
            }
        }

        for(var i = 0; i < invaders.length; i++){
            if(invaders[i].toDelete){
                invaders.splice(i, 1);
            }
        }

        for(var i = 0; i < invaders1.length; i++){
            if(invaders1[i].toDelete){
                invaders1.splice(i, 1);
            }
        }

        for(var i = 0; i < invaders2.length; i++){
            if(invaders2[i].toDelete){
                invaders2.splice(i, 1);
            }
        }

        for(var i = 0; i < 200; i++){
            stars[i].display();
        }

        if(invaders.length === 0 && invaders1.length === 0 && invaders2.length === 0){
            gameState = 0;
        }

        if(gameState === 0){
            window.location = 'end.html';
        }
}

function keyPressed(){
    if(touches.length > 0 || keyCode === 32){
        var bullet = new Bullet(player.x, player.y);
        Ammo.push(bullet);
        touches = [];
    }
    if(keyCode === 37){
        player.move(-4);
    }else if(keyCode === 39){
        player.move(4);
    }
}