class ceiling {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        var option = {
            isStatic: true
        }

        this.body = Bodies.rectangle(this.x, this.y, this.width, this.height, option);
        World.add(world, this.body);



    }

    display() {
        var OOF = this.body.position;
        push();
        translate(OOF.x, OOF.y);
        rectMode(CENTER);
        fill("white");
        rect(0, 0, this.width, this.height);
        pop();
    }




}