let playing = false;
let fingers;
let button;

function setup() {
    var canvas = createCanvas(min(windowWidth,600), 400);
    canvas.parent('canvasForHTML');
    fingers = createVideo("/js/readbook2.mov");
    fingers.size(min(windowWidth,600), 400);
    fingers.loop();
    fingers.hide();
    button = createButton('play');
    button.mousePressed(toggleVid); // attach button listener
}

function draw() {
    background(127);
    let img = fingers.get();
    image(img, 0, 0);
}

// plays or pauses the video depending on current state
function toggleVid() {
  if (playing) {
    fingers.pause();
    button.html('play');
  } else {
    fingers.loop();
    button.html('pause');
  }
  playing = !playing;
}

function windowResized(){
  canvas = createCanvas(max(10,min(windowWidth,600)), max(10,min(400,windowWidth/2)));
  canvas.parent('canvasForHTML');

}