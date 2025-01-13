let faceapi;
let flippedVideo;
let video;
let detections;
let eye;
let tmpimager;
let isdetect = false, labelend = true;
let detecttime = 0;

let classifier = [];
let imageModelURL = ['UB4ZpXc7w','QxUTbGHin','TyAOzJ8Th','ZA5_ky317','34xBT0T_5'];

let label = "";

const getAverage = (array) => array.reduce((sum, currentValue) => sum + currentValue, 0) / array.length;


const detectionOptions = {
    withLandmarks: true,
    withDescriptors: false,
};

function facedetectsetup(){
    video = createCapture(VIDEO);
    video.size(width, height);
    video.hide();
    faceapi = ml5.faceApi(video, detectionOptions, modelReady);
    textAlign(RIGHT);
}

function modelReady() {
    console.log("ready!");
    console.log(faceapi);
    faceapi.detect(gotResults);
}

function gotResults(err, result) {
    if (err) {
        console.log(err);
        return;
    }
    detections = result;


    //background(255);
    image(video, 0, 0, width, height);
    if (detections && detect) {
        if (detections.length > 0) {
            drawBox(detections);
            drawLandmarks(detections);
            isdetect = true;
            detecttime = new Date().getTime();
        }
    }
    faceapi.detect(gotResults);
}

function drawBox(detections) {
    let i = 0;
    const alignedRect = detections[i].alignedRect;
    const x = alignedRect._box._x;
    const y = alignedRect._box._y;
    const boxWidth = alignedRect._box._width;
    const boxHeight = alignedRect._box._height;
    /*
    noFill();
    stroke(161, 95, 251);
    strokeWeight(2);
    rect(x, y, boxWidth, boxHeight);
    */
    tmpimager = video.get( x, y, boxWidth, boxHeight)
}

function drawLandmarks(detections) {
    const leftEye = detections[0].parts.leftEye;
    const rightEye = detections[0].parts.rightEye;
    
    let lefteyex = [], lefteyey = [];
    leftEye.forEach(e => {
        lefteyex.push(e.x);
        lefteyey.push(e.y);
    }); 
    rightEye.forEach(e => {
        lefteyex.push(e.x);
        lefteyey.push(e.y);
    }); 
    
    let personx = getAverage(lefteyex), persony = getAverage(lefteyey);
    //circle(personx, persony, 5);
    let motorx= (Math.atan(Math.abs(personx-200) / 150) * (180 / Math.PI)) * 2038 / 360;
    let motory= (Math.atan(Math.abs(persony-150) / 150) * (180 / Math.PI)) * 2038 / 360;

    personx - 200 > 0? motorx=-motorx:motorx=motorx;
    persony - 150 > 0? motory=-motory:motory=motory;
    motorx = "x"+-motorx+" ";
    motory = "y"+-motory+" ";
    serial.write(motorx);
    serial.write(motory);
}

function labelpreload(){
    for (var i = 0; i< imageModelURL.length; i++)
        classifier.push(ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/' + imageModelURL[i] + '/model.json'));
}

function getlabel(s){
    classifier[s].classify(tmpimager, gotlabelResult);
}
  

function gotlabelResult(error, results) {
    if (error) {
      console.error(error);
      return;
    }
    label = results;
    waitlabel();
}