//********************sound is can't use still don't know why, Help @@ ********************//
import processing.sound.*;
import java.util.* ;

float yOffset = 0.0; 
int state=0;
boolean video=false, comic=!video;
float mousewheel=0, startmcvolume=0.001, fadevolume=0.005;
PImage b;
String Path="https://raw.githubusercontent.com/wty262690/OusideTheWindow/main/";
int fadetime=300, wheelspeed=15;
SoundFile startmusic;

void setup(){
  size(800,700,P2D);
  W=width; H=height; W2=W/2; H2=H/2;
  swsetup();
	print("images loading please wait a minute.");
  comicset();
  b= new PImage(width,height);
  /*
  println("System Font list :");
  printArray(PFont.list());
  textFont(createFont(PFont.list()[143],200));
  */
	//startmusic = new SoundFile(this,"https://raw.githubusercontent.com/wty262690/OusideTheWindow/main/sound/KeysofMoon-CozyPlacecut.wav");
  //startmusic.amp(startmcvolume);
	
  reset();  
	imageMode(CORNERS);
  }
  
  
void draw(){
	background(255);
  if (video)  mousewheel+=wheelspeed/10;
  /*
  startmusic.amp(startmcvolume);//println(startmcvolume);
  if (!startmusic.isPlaying()){startmusic.loop();}
  */
	if(frameCount<fadetime/2) {
		fadeout(b);
	}
	else{
		switch(state){
      case(0): swdraw(); break;
      case(1): comicdraw();break;
      case(2): testdraw();break;
    }
	}
}

/* don't know why did mousewheel can't use in openprocessing
void mouseWheel(MouseEven event){
	print(mousewheel);
  if (comic)  mousewheel+=(event.getCount()*wheelspeed);
}
*/

void mousePressed() {
  yOffset = mouseY; 
}

void mouseDragged() {
	if (mouseY<0 || mouseY>H) return;
  mousewheel -= (mouseY-yOffset)*0.05; 
}

void reset(){
  b.copy();
  mousewheel=-H2;
  video=false;
  comic=true;
  frameCount=0;
}

void fadeout(PImage back){
	startmcvolume=max(0.001,startmcvolume-fadevolume);
	fill(0,0,0,map(frameCount,0,fadetime/2, 0,300));
  rect(0,0,W,H);
}

void fadein(PImage back){
  startmcvolume=min(0.4,startmcvolume+fadevolume);  
	fill(0,0,0,map(frameCount,fadetime,fadetime/2,0,300));
  rect(0,0,W,H);
}