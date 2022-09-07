class Ground{
    constructor(x,y,w,h){
        var options = {
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,w,h,options);
        this.w=w
        this.h = h
        World.add(world,this.body)
    }
    show(){
        var poes = this.body.position;
        push()
        rectMode(CENTER);
        fill(127);
        rect(poes.x,poes.y,this.w,this.h);
        pop();
    }
}
