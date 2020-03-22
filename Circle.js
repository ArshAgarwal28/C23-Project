class Circle {
    constructor(x, y, radius) {
        var options = {isStatic: true};
        this.body = Bodies.circle(x, y, radius, options);
        
        this.r = radius;

    }

    display() {
        var pos = this.body.position;
        
        ellipseMode(CENTER);
        ellipse(pos.x, pos.y, this.r, this.r);
    }
}