class Log{
constructor(x,y,h,angle){
var option = {
friction : 3.0,
restitution : 0.3
    }
 this.body = Bodies.rectangle(x,y,20,h,option) 
this.w = 20
this.h = h  
Matter.Body.setAngle(this.body,angle)
World.add(world,this.body)
}
display(){
var pos = this.body.position
var angle = this.body.angle
push()
translate(pos.x,pos.y)
rotate(angle)
strokeWeight(4)
stroke("yellow")
fill("white")
rect(0,0,this.w,this.h)
pop()
}
}