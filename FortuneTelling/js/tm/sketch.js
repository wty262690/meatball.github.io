// Copyright (c) 2019 ml5
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/* ===
ml5 Example
Webcam Image Classification using a pre-trained customized model and p5.js
This example uses p5 preload function to create the classifier
=== */

// Classifier Variable
let classifier = [];
// Model URL
let imageModelURL = ['UB4ZpXc7w','QxUTbGHin','TyAOzJ8Th','ZA5_ky317','34xBT0T_5'];

// Video
let video;
let flippedVideo;
// To store the classification
let label = "";
let tmpimager;
let faceapi;
let width = 640, height= 480;
let hasface = false, haslabel = false;

// Load the model first
function preload() {
  for (var i = 0; i< imageModelURL.length; i++)
    classifier.push(ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/' + imageModelURL[i] + '/model.json'));
}

function setup(){
  createCanvas(320, 260);
  // Create the video
}

function cameraopen(){
  video = createCapture(VIDEO);
  video.size(320, 240);
  video.hide();
}

function start() {
  flippedVideo = ml5.flipImage(video)
  // Start classifying
  make();
}

// Get a prediction for the current video frame
function classifyVideo() {
  flippedVideo = ml5.flipImage(video)
  tmpimager = flippedVideo
  faceapi.detect(tmpimager, gotfaceResults);
  console.log("no detect")
}

/*face detect*/ 
const detectionOptions = {
  withLandmarks: true,
  withDescriptors: false,
};


async function make() {
  console.log("make")
  faceapi = await ml5.faceApi(detectionOptions, modelReady);
}

function modelReady() {
  console.log("model ready!");
  classifyVideo()
}

function gotfaceResults(err, result) {
  if (err) {
    console.log(err);
    return;
  }
  detections = result;

  if (detections && detections.length>0) {
    drawBox(detections);
    getface = true;
  }
  else{
    classifyVideo();
  }
}

function drawBox(detections) {
  console.log("detect!!!")
  const alignedRect = detections[0].alignedRect;
  const x = alignedRect._box._x;
  const y = alignedRect._box._y;
  const boxWidth = alignedRect._box._width;
  const boxHeight = alignedRect._box._height;
  tmpimager = tmpimager.get( x/2, y/2, boxWidth/2, boxHeight/2)
  waitcamera();
}

function getlabel(s){
  classifier[s].classify(tmpimager, gotResult);
}

// When we get a result
function gotResult(error, results) {
  if (error) {
    console.error(error);
    return;
  }
  console.log(results)
  label = results;
  waitlabel();
}