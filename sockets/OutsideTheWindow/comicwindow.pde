BP PAGE;
float buttonr;
SoundFile schoolbell, birdsound;
boolean playschoolbell=false, playbirdsound=false;
void comicset(){
  PAGE=new BP();
  //birdsound = new SoundFile(this, "robin_brid_sound.wav");
  //birdsound.amp(1);
  //schoolbell = new SoundFile(this, "sound/schoolbell.wav");
  //schoolbell.amp(0.05);
  buttonr=min(W,H)/15;
}
void comicdraw(){
	 background(255);
   PAGE.bpdraw();
   if(frameCount<fadetime) 
	 {
		 b.copy();
		 fadein(b);
	 }
   ////--------- change to startwindow ---------////
   if (PAGE.changestate){
     reset();
     state=0;
     return;
   }
   /*
  ////--------- schoolbell ring ---------////
  if (mousewheel>=-H2-wheelspeed*2 && mousewheel<=-H2+wheelspeed*2){
    if (!schoolbell.isPlaying() && !playschoolbell) {
      schoolbell.play();
      playschoolbell=true;
    }
  }
  else playschoolbell=false;
  ////--------- birdsing ---------////
  if (mousewheel>=PAGE.pageh*5-wheelspeed*2 && mousewheel<=PAGE.pageh*5+wheelspeed*2){
    if (!birdsound.isPlaying() && !playbirdsound) {
      birdsound.play();
      playbirdsound=true;
    }
  }
  else playbirdsound=false;
  */
  ////--------- play type button ---------////
  /*if(buttonapla<0 || buttonapla>20) changeba*=-1;
  buttonapla+=changeba;
  print(buttonapla);*/
  color buttoncolor=color(0);
  if (mousewheel>=pageh*9+pageh/2 && mousewheel<=pageh*18+pageh/2)  buttoncolor=color(255);
  else buttoncolor=color(0);
  if (dist(mouseX,mouseY,W-buttonr*1.5,H-buttonr*1.5)<buttonr) {
    noFill();
    for (int i=1; i<5; i++){
      float buttonsize=map((frameCount/4)%20,0,20,10,buttonr/i)*i;
      stroke(buttoncolor,map(buttonsize,0,buttonr-1, 200,0)); strokeWeight(3);
      ellipse(W-buttonr*1.5,H-buttonr*1.1,buttonsize,buttonsize); 
      }
    }
  
    fill(buttoncolor);
    String type="comic";
    if (comic) type="video";
    if (video) type="comic";
    textSize(20); 
		textAlign(CENTER,CENTER);
    text(type ,W-buttonr*1.5,H-buttonr*1.1);
  
}

void mouseClicked(){
  if (state==1 && dist(mouseX,mouseY,W-buttonr*1.5,H-buttonr*1.5)<buttonr) {
    video=!video;
    comic=!comic;
  }
}

