var p;

function setup() {
  createCanvas(400, 400);
	p1 = new Ball();
	p2 = new Ball();
}

function draw() {
  background(220);
	p1.mostrar();
	p1.mover();
	if (p1.salirx()){
  p1.botarx();	
	}	
	if (p1.saliry()){
  p1.botary();	
	}	
	
	p2.mostrar();
	p2.mover();
	if (p2.salirx()){
  p2.botarx();	
	}	
	if (p2.saliry()){
  p2.botary();	
	}	
}
class Ball{
constructor (){
	this.x = random (25,375);
	this.y = random (25,375);
	this.tam= 50;
	this.velx = 3;
	this.vely= 3;
	this.r = random (0,255);
	this.g = random (0,255);
	this.b = random (0,255);

}
	mostrar(){
		
		fill(this.r, this.g, this.b);
		ellipse(this.x,this.y,this.tam,this.tam);
		
	}
	mover(){
		this.x= this.x + this.velx;
		this.y= this.y + this.vely;
	
	}
	salirx(){
		var res;
	if (this.x < 25 || this.x > 375){
		res = true;
	}
		else{
		res = false;
		}
		return res;
	}
	botarx(){
	this.velx = this.velx*(-1);
this.r = random (0,255);
	this.g = random (0,255);
	this.b = random (0,255);

	

	}
	saliry(){
		var res;
	if (this.y < 25 || this.y > 375){
		res = true;
	}
		else{
		res = false;
		}
		return res;
	}
	botary(){
	this.vely = this.vely*(-1);
		this.r = random (0,255);
	this.g = random (0,255);
	this.b = random (0,255);

	

	}
}
