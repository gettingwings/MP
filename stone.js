class Stone{
    constructor(x,y){
        var options = {
            'isStatic': 'false',
            'restitution':0,
            'friction':1,
            'density':1.2
        }

        this.body = Matter.Bodies.circle(x, y, 15, options);
        Matter.World.add(world, this.body);
        this.image = loadImage("sprites/stone.png");

    }

    display(){
        
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0, 15,15 );
        pop();
    }

}