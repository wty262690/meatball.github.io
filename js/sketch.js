let playing = false;
let fingers;
let button;

function setup() {
    var canvas = createCanvas(min(windowWidth,600), min(windowWidth,400));
    canvas.parent('canvasForHTML');
    readbook = createVideo("/js/video/readbook.mp4");
    headup = createVideo("/js/video/headup.mp4");
    headdown = createVideo("/js/video/headdown.mp4");
    readbook.loop();
    button = createButton('play');
    button.mousePressed(toggleVid); // attach button listener
    readbook.hide();
    headup.hide();
    headdown.hide();
    vid=readbook;
}

function draw() {
  background(0);
  image(vid,0,0,width,height);
}


function windowResized(){

}

function toggleVid() {
  if (playing) {
    vid.pause();
    vid=headup;
    headup.play();
    button.html('play');
  } else {
    vid.pause();
    vid=readbook;
    readbook.play();
    button.html('pause');
  }
  playing = !playing;
}