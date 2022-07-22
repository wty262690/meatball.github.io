let playing = true;
let vid,readbook,headup,headdown;
let button;

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
    vid=readbook;
}

function afterLoad() { 
  text("The video has finished loading and will"+ " now play!", 20, 40); 
  readbook.loop();
  vid=readbook;
  image(vid,0,0,width,height);
}

function draw() {
  background(0);
  image(vid,0,0,width,height);
}


function windowResized(){
  setcanvas();
}

function mouseClicked() {
  if (playing) {
    vid.pause();
    vid=headup;
    headup.play();
    //button.html('play');
  } else {
    vid.pause();
    vid=readbook;
    readbook.loop();
  }
  playing = !playing;
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