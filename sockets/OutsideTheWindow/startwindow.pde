PImage bg,bell;
float W, H, W2, H2;
float bellrotate=0, brchange=0.005;

void swsetup(){
  size(800,700,P2D);
  W=width; H=height; W2=W/2; H2=H/2;
  bg=loadImage(Path+"image/"+"1-background.png");  
  bell=loadImage(Path+"image/"+"1-bell.png");
  }
void swdraw(){
  ////---------background---------////
  image(bg,0,0,W,H);
  if (bellrotate>0.15 || bellrotate<-0.15) brchange=-brchange;
  bellrotate+=brchange;
	
    translate(W2-10,H2-180);
    rotate(bellrotate);
    imageMode(CENTER);
    image(bell,10,180,W,H);
		imageMode(CORNERS);
    //circle(0,0,10);//check
    rotate(-bellrotate);
    translate(-(W2-10),-(H2-180));
	
  if(frameCount<fadetime){
		b.copy();
		//if (frameCount<=fadetime/2) b.copy();
    fadein(b);
		return;
  }
	
  ////---------text---------////
	fill(255,200);
  noStroke();
  rectMode(CORNER);
  rect(0,H2,min(W,(frameCount-20-fadetime)*10),80);
  fill(0,min(200,(frameCount-70-fadetime)*1.5));
  textAlign(CENTER,CENTER);
  textSize(50);
  text("OUTSIDE THE WINDOW", W2,H/1.8);
  ////---------playbutton---------////
  translate(W2,H/1.4);
  fill(0,min(210,(frameCount-130-fadetime)));
  noStroke(); 
  //strokeWeight(2.2);
  //circle(0,0,110);//check
  if (frameCount-130-fadetime>50 && dist(mouseX,mouseY,W2,H/1.4)<55) {
    fill(255,210);
    if (mousePressed){
      state=1;
      reset();
    }
  }
  beginShape();
  curveVertex(-25,  50);
  curveVertex(50,  0);
  curveVertex(-25,  -50);
  curveVertex(-25,  50);
  curveVertex(50,  0);
  curveVertex(-25, -50);
  endShape();
  
}