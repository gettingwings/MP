class Mango{
    constructor(x, y){
        var options = {
            'isStatic': 'true',
            'restitution': 0,
            'friction':1
        }

        this.body = Matter.Bodies.circle(x, y, 15, options);
        Matter.World.add(world, this.body);
        this.image = loadImage("sprites/mango.png");

    }

    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, 15,15 );
        
    }

}