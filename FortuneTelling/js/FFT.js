let fft;
let sound=[];
let fftinterval;
let playend = true;
let audionum = 47;

function audiopreload() {
  for (var i = 0; i< audionum; i++){
    sound.push(loadSound('./audio/'+i+'.mp3'));
  }
}


function audiosetup() {  
  fft = new p5.FFT();
}

function playsound(index){
    console.log("PLAY"+index);
    sound[index].amp(0.5);
    sound[index].play();
    fftinterval = setInterval(fftanalyze, 10, index);
}


let prepos = 0;
function fftanalyze(index) {
  if (sound[index].isPlaying()){
    let spectrum = fft.analyze(), listheight = []; 
    //noStroke();
    //fill(160, 0, 0);
    for(let i = 0; i < spectrum.length; i++) {
        let h = -height + map(spectrum[i], 0, 255, height, 0);
        listheight.push(map(spectrum[i], 0, 50, 0, 90));
    }
    let pos = getAverage(listheight);
    /*
    circle(200,pos,20);
    endShape();
    */
    pos = parseInt(pos/20) * 20;
    if(pos != prepos) {
      //console.log(prepos);
      serial.write('v'+pos+' ');
      prepos = pos;
    }
  } 
  else {
    let pos = 0;
    prepos = pos;
    serial.write('v'+pos+' ');
    playend = true;
    clearInterval(fftinterval);
  }
}