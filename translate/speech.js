var infoBox; 
var tempBox; 
var startStopButton; 
var recognizing = false; 

function startButton(event) {
  infoBox = document.getElementById("infoBox");
  tempBox = document.getElementById("tempBox"); 
  startStopButton = document.getElementById("startStopButton"); 
  langCombo = document.getElementById("langCombo"); 
  if (recognizing) { 
    tempBox.innerHTML = '...'; 
    recognition.stop();
  } else { 
    tempBox.innerHTML = '...請開始說話...'; 
    recognition.lang = 'cmn-Hant-TW';
    recognition.start();
  }
}

if (!('webkitSpeechRecognition' in window)) {  
  infoBox.innerText = "本瀏覽器不支援語音辨識，請更換瀏覽器！(Chrome 25 版以上才支援語音辨識)";
} 
else {
  var recognition = new webkitSpeechRecognition(); 
  recognition.continuous = true;
  recognition.interimResults = true;

  recognition.onstart = function() { 
    recognizing = true; 
    startStopButton.value = "stop"; 
    infoBox.innerText = "...請開始說話...";  
  };

  recognition.onend = function() { 
    recognizing = false;
    startStopButton.value = "start";  
    tempBox.innerHTML = '...'; 
    infoBox.innerText = "支援"; 
  };

  recognition.onresult = function(event) {
    var interim_transcript = ''; 
    for (var i = event.resultIndex; i < event.results.length; ++i) {
      interim_transcript += event.results[i][0].transcript;
    }
    if (interim_transcript.trim().length > 0) 
        tempBox.innerText = interim_transcript;
  };
}