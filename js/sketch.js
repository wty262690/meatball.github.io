let playing = true;
let vid,readbook,headup,headdown;
let button;
let showVid = true;
function setup() {
    setcanvas();
    readbook = createVideo("/js/video/readbook.mp4");
    headup = createVideo("/js/video/headup.mp4");
    headdown = createVideo("/js/video/headdown.mp4");
    //button = createButton('play');
    //button.mousePressed(toggleVid); // attach button listener
    readbook.hide();
    headup.hide();
    headdown.hide();
    readbook.play();
    vid=readbook;
    draw();
    setTimeout(() => showVid = false, random(2500,5000));
}

let playnow=0;
function draw() {
  image(vid,0,0,width,height);
  if ((mouseX>0 && mouseY<width) && (mouseY>0 && mouseY<height)){
    cursor('grab');
  }
  if (!showVid){
    readbook.hide();
    headup.hide();
    headdown.hide();
    switch(playnow){
      case 0: 
        vid=readbook;
        if (int(random(-100, 100))==0){
          vid.play();
          showVid=true;
          setTimeout(() => showVid = false, random(2500,5000));
        }
        break;
      case 1:
        headup.play();
        vid=headup;
        showVid=true;
        setTimeout(() => showVid = false, 800);
        playnow=3;
        break;
      case 2:
        headdown.play();
        vid=headdown;
        showVid=true;
        setTimeout(() => showVid = false, 800);
        playnow=0;
        break;
      case 3:
        showVid=true;
        setTimeout(() => showVid = false, random(2000,5000));
        playnow=2;
        break;
    }
  }
}


function mousePressed() {
  if (dis() && playnow!=3 && playnow!=2){
    playnow=1;
  }
}

function setcanvas(){
  var canvas;
  if (windowWidth*(40/100)>=400){
    canvas = createCanvas(min(windowWidth*(40/100),600), min((windowWidth*(40/100)/1920)*1080,600/1920*1080));
  }
  else{
    canvas = createCanvas(min(windowWidth*(80/100),600), min((windowWidth*(80/100)/1920)*1080,600/1920*1080));
  }
  canvas.parent('canvasForHTML');
  
}

function windowResized(){
  setcanvas();
}

function dis(){
  if ((mouseX>0 && mouseY<width) && (mouseY>0 && mouseY<height)) return true;
  else return false;
}