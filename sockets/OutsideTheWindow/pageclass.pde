float pagew=1500, pageh=1499;
class BP{
  int pagenum=21;
  String[] pagename = new String[pagenum];
  String[] smallpagename = new String[pagenum];
  PImage[] page= new PImage[pagename.length];
  int [] SamllPageNum={0,0,0,3,0,1,0,0,2,0,4,1,1,1,1,1,0,0,1,1,0};
  int [] CoverNum={0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0};
  ArrayList<SP> smallpage,cover ;
  SP leaf;  
  int pindex=0;
  boolean changestate=false;
  BP(){
    smallpage = new ArrayList<SP>();
    cover = new ArrayList<SP>();
    leaf= new SP("leaf",1);
		
    for(int i=0; i<page.length; i++){
      pagename[i]=str(i+2);
			Pimage tmp=loadImage(Path+"image/"+pagename[i]+".png");
      page[i]=tmp;
			page[i].resize(W,height*(pagew/W));
      smallpage.add(new SP(str(i+2),SamllPageNum[i]));
      cover.add(new SP(str(i+2)+"-cover",CoverNum[i]));
    }
		pageh=height*pagew/W;
		pagew=W;
  }
  void bpdraw(){
    ////---------background---------////
		imageMode(CORNER);
    pindex=int(mousewheel/pageh);
    if (pindex>=0 && pindex<page.length){
      changestate=false;
			image(page[pindex],0,-(mousewheel-(pindex*pageh)),W,pageh);
			if (pindex+1<page.length)  {
				image(page[pindex+1],0,-(mousewheel-(pindex*pageh))+pageh,W,pageh);
			}
		}
    if (pindex<0|| (pindex==page.length-1 && pageh-(mousewheel-pindex*pageh)<H)){
      mousewheel=pageh*pindex;
      if (pindex<0) pindex++;
      changestate=true;
    }
		
    ////---------window---------////
    SP p,c;
    p = smallpage.get(pindex);
    c = cover.get(pindex);
    switch(pindex+2){
      case(5):  p.spdraw(pindex, pageh,H/8,250, new PVector(0,-100), new PVector(0,100), new PVector(0,0));  break;
      case(7):  p.spdraw(pindex, pageh,H/1.5,0, new PVector(100,0), new PVector(-100,0),  new PVector(0,0));  break;
      case(10):  p.spdraw(pindex, pageh,H/8,300,new PVector(0,-100), new PVector(0,100), new PVector(0,0));
                 if (mousewheel-(pindex*pageh)<pageh/2)  leaf.spdraw(pindex, pageh,0,0,new PVector(((mousewheel-(pageh*pindex)))*0.5,(mousewheel-(pageh*pindex)*0.5)*0.05),new PVector(-W2,0),new PVector(W2,pageh));
                 else if (mousewheel-(pindex*pageh)>pageh/2)  leaf.spdraw(pindex, pageh,H,0,new PVector(-((mousewheel-(pageh*pindex)))*0.5,(mousewheel-(pageh*pindex)*0.5)*0.04),new PVector(W2,H*1.2),new PVector(-W,pageh*2));  
                 break;
      case(11):  leaf.spdraw(pindex, pageh,0,0,new PVector(((mousewheel-(pageh*pindex)))*0.9,(mousewheel-(pageh*pindex)*0.5)*0.025),new PVector(-W/1.2,H/3),new PVector(W2,pageh)); break;
      case(12):  p.spdraw(pindex, pageh,-H/8,100,new PVector(0,0), new PVector(0,0), new PVector(0,0)); break;
      case(13):  p.spdraw(pindex, pageh,H/8,300,new PVector(0,50), new PVector(0,-30), new PVector(0,0));  
                 p=smallpage.get(pindex+1); p.spdraw(pindex, pageh,H*1.7,0,new PVector(0,70), new PVector(0,700), new PVector(0,1000)); 
                 c.coverdraw(pindex,pageh);
                 //c=cover.get(pindex+1); copy(c.page[0],0,0,page[pindex].width,height,0,int(((pindex+1)*pageh)-mousewheel),width,height);
                 break;
      case(14):  p.spdraw(pindex, pageh,-H,0,new PVector(0,50), new PVector(0,-770), new PVector(0,1000));
                 c.coverdraw(pindex,pageh); 
                 break;
      case(15):  p.spdraw(pindex, pageh,0,0,new PVector(0,0),new PVector(0,0),new PVector(0,0));  
                 p=smallpage.get(pindex+1); p.spdraw(pindex, pageh,0,0,new PVector(0,50), new PVector(0,pageh-250), new PVector(0,pageh+200)); break;
      case(16):  p.spdraw(pindex, pageh,-H,0,new PVector(0,50),new PVector(0,-95),new PVector(0,150));  break;
      case(17):  p.spdraw(pindex, pageh,0,0,new PVector(0,-50),new PVector(0,400),new PVector(0,-100));  
                 break;
      case(19):  
                 if (mousewheel-(pindex*pageh)>450 && mousewheel-(pindex*pageh)<pageh-750){
                     noStroke();
                     float w=(mousewheel-(pindex*pageh))*4;
                     if ((w/(pageh-1300))%2==0)  fill(255,map(w%(pageh-1300),0,pageh-1300,0,100));
                     else fill(255,map(w%(pageh-1300),0,pageh-1300,100,0));
                     rect(0,pageh/3.6-(mousewheel-(pindex*pageh)),W, H*1.45);
                 }
                 p=smallpage.get(pindex+1); p.spdraw(pindex, pageh,0,0,new PVector(100,0), new PVector(-W/1.2,pageh), new PVector(0,pageh)); break;
      case(20):  p.spdraw(pindex, pageh,-H,0,new PVector(100,0),new PVector(-W/3-60,0),new PVector(W,0));  break;
      case(21):  p.spdraw(pindex, pageh,H2,0,new PVector(0,-100),new PVector(0,100),new PVector(0,0));  break;
      default: break;
    }
  }
}

class SP{
  PImage[] page;
  PVector[] pageloca;
  float alpha=0;
  SP(String path, int num){
    page=new PImage[num];
    pageloca= new PVector[num];
    for (int i=0; i<num; i++){
      page[i]=loadImage(Path+"/image/"+path+"-"+str(i+1)+".png");
      page[i].resize(W,height*(pagew/W));
      pageloca[i]=new PVector(0,0);
    }
  }
  
  void spdraw(int pindex, float pageh, float fadeh, float fadegap,PVector move,PVector from, PVector to){
    alpha=mousewheel-(pindex*pageh)-fadeh;
    
		for (int i=0; i<page.length; i++){
      if (min(alpha-i*fadegap,300)<=0) {continue;}
			//else if (alpha-i*fadegap<300)	tint(255, min(max(1,alpha-i*fadegap),300));
      page[i].updatePixels();
			if (alpha<0){
          pageloca[i].x=from.x;
          pageloca[i].y=from.y;
        }
        float movey=map(alpha-i*fadegap,0,200,move.y,0);
        float movex=map(alpha-i*fadegap,0,200,move.x,0);
        if (move.y<0){
          pageloca[i].y=max(-int(mousewheel-(pindex*pageh))+from.y-movey,-int(mousewheel-(pindex*pageh))+to.y);
        }
        else { 
          pageloca[i].y=min(-int(mousewheel-(pindex*pageh))+from.y-movey,-int(mousewheel-(pindex*pageh))+to.y);
        }
        if (move.x<0){pageloca[i].x= max(from.x-movex,to.x);}
        else {
          pageloca[i].x= min(from.x-movex,to.x);
        }  
      image(page[i],pageloca[i].x,pageloca[i].y,W,pageh);
			noTint();
    }
  }
  
  void coverdraw(int pindex,float pageh){
    for (int i=0; i<page.length; i++){
      image(page[i],0,-int(mousewheel-(pindex*pageh)),W,pageh);
    }
  }
  
  void leafdraw(int pindex, float pageh){
      translate(W/4,H2);
      circle(0,0,20);
      rotate((mousewheel-(pindex*pageh))*0.001- 0.2);
      image(leaf,-W/4,-H2);
  }
}