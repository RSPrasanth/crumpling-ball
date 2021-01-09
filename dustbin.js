class dustbin {
	constructor(x, y, width, height) {
	  var options = {
		'restitution':0.01,
		'friction':1,
		'density':0.1
		
	  }
	  this.body = Bodies.rectangle(x, y, width, height, options,{isStatic:false});
	  this.width = width;
	  this.height = height;
	  
	  World.add(world, this.body);
	}
	display(){
	  var pos =this.body.position;
	  var angle = this.body.angle;
	  push();
	  translate(pos.x, pos.y);
	  rotate(angle);
	  rectMode(CENTER);
	  strokeWeight(3);
	  stroke("red");
	  fill("yellow");
	  rect(0, 0, this.width, this.height);
	  pop();
	}
  };
  