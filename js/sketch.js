let playing = false;
let fingers;
let button;

function setup() {
    var canvas = createCanvas(400, 400);
    canvas.parent('canvasForHTML');
    fingers = createVideo("/js/test2.mp4");
    fingers.size(400, 400);
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