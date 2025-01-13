let detect = false;
let sheetstatus = 0, labelstatus = 0;
let playlist = [];
let labelanswer = [];
let labelnum = 5, sheetnum = 10;
let isWriting = false;
function preload(){
    labelpreload();
    audiopreload();
}
function setup() {
    createCanvas(400, 300);

    arduinosetup();
    audiosetup();
    facedetectsetup();
}

function opendetect(){
    detect = true;
    reset();
}

function closedetect(){
    detect = false;
    reset();
}

function draw(){
    if (isdetect){
        if(new Date().getTime() - detecttime > 3000){
            isdetect = false;
            playlist = [];
            labelanswer = [];
            sheetstatus%2==0? sheetstatus=sheetstatus : sheetstatus+=1;
            sheetstatus %= sheetnum;
            console.log("clear");
        }
        else if (playend && labelend && !isWriting){
            playend = false;
            if (playlist.length > 0)    {
              typeWriter("#sheet", labelanswer.shift()+'\n');
              playsound(playlist.shift());
            }
            else    {
              labelanswer = [];
              tell(sheetstatus);
            }
        }
    }
}

function tell(index) {
    if(sheet[index].type == "analysis"){
        labelend = false;
        getlabel(labelstatus);        
    }
    else{
        playsound(sheet[index].audio);
        typeWriter("#sheet", '\n'+sheet[index].A+'\n');
    }
    sheetstatus++;
    sheetstatus %= sheetnum;
}

function waitlabel(){
    let count = 0, enteronce = false;
    let labellist = [label[count].label];
    const l = labelsheet[labelstatus];
    switch(labelstatus){
      case 0: 
        while(labellist.length>0){
          const len = labellist.length;
          const l1 = labellist[len-1];
          switch(l1){
            case "Normal person": case "manager": case "Emperor": case "famous": 
              if (!enteronce) {
                labelanswer.push('\n<b>' + l.lab[0] +'_'+ l1.toUpperCase() +'</b>\n'+ l.sentecnes[0]);
                labelanswer.push(l[l1]);
                playlist.push(l.audio.sentecnes[0]);
                playlist.push(l.audio[l1]);
              }
              labellist.pop();
              enteronce = true;
              break;
            case "bachelor": case"master": case "doctorate":
              if (!enteronce){
                count ++;
                labellist.push(label[count].label);
              }
              else{
                if (len <= 1)  {
                    labelanswer.push('\n<b>' + l.lab[1] +'</b>');
                    labelanswer.push(l.sentecnes[1] + l[l1]);
                    playlist.push(l.audio.sentecnes[0]);
                    playlist.push(l.audio[l1]);
                }
                labellist.pop();
              }
              break;
            default: 
              labelanswer.push('\nerror_' + l1);
              labellist.pop();
              break;
          }
        }
        break;
      case 1: case 2: case 3: case 4:
        while(labellist.length>0){
          const l1 = labellist[labellist.length-1];
          switch(l1){
            case "long married":case "Late married": case "rich": case "eligible": case "move abroad": case 'jobless': case 'prisoner': case 'car accident': case 'war': case 'sleep': case 'natural cause': case 'illness': case 'health problem': case 'shoted': case "Break up": 
              labelanswer.push('\n<b>' + l.lab[0] +'_' + l.smalllab[l.smalllabindex[l1]] +'</b>\n'+ l.sentecnes[0]);
              labelanswer.push(l[l1]);
              playlist.push(l.audio.sentecnes[0]);
              playlist.push(l.audio[l1]);
              labellist.pop();
              break;
            case "Cheating":case "betray": case "married a lot": case "bankruptcy": case "nouveau riche":
              if (!enteronce) {
                labelanswer.push('\n<b>' + l.lab[0] +'_' + l.smalllab[l.smalllabindex[l1]] +'</b>\n'+ l.sentecnes[0]);
                labelanswer.push(l[l1]);
                labelanswer.push('\n<b>' + l.lab[1]  +'</b>\n'+ l['warning'][l1] );
                playlist.push(l.audio.sentecnes[0]);
                playlist.push(l.audio[l1]);
                playlist.push(l.audio['warning'][l1]);
              }
              labellist.pop();
              break;
            case "normal":
              if (labelstatus == 4){
                labelanswer.push('\n<b>' + l.lab[0] +'_' + l.smalllab[l.smalllabindex[l1]] +'</b>');
                labelanswer.push(  l.sentecnes[0] + '\n' + l[l1]);
                playlist.push(l.audio.sentecnes[0]);
                playlist.push(l.audio[l1]);
                labellist.pop();
                break;
              }
            case "single": case "poor":
              labelanswer.push('\n<b>' + l.lab[0] +'_' + l.smalllab[l.smalllabindex[l1]] +'</b>\n' + l[l1]);
              playlist.push(l.audio[l1]);
              labellist.pop();
              break;
            default:
              labelanswer.push('\nerror_' + l1);
              playlist.push(l.audio[l1]);
              labellist.pop();
              break;
          }
        }
        
    }
    labelstatus ++;
    labelstatus %= labelnum;
    labelend = true;
    playend = false;
    playsound(playlist.shift());
    typeWriter("#sheet", labelanswer.shift() +'\n');
  }

  function typeWriter(el, answer) {
    if (answer.length>0) {
      isWriting = true;
      if (answer[0] == '\n'){ 
        $( el ).last().append("<br>");
        setTimeout(typeWriter, 40, el, answer.slice(1,answer.length));
      }
      else if (answer[0] == '<'){ 
        $( el ).last().append(answer.slice(0,answer.search("</b>")+4));
        setTimeout(typeWriter, 40, el, answer.slice(answer.search("</b>")+4,answer.length));
      }
      else{
        $( el ).last().append(answer.slice(0,1));
        setTimeout(typeWriter, 40, el, answer.slice(1,answer.length));
      }
    }
    else {
      isWriting = false;
    }
    $('html, body').animate({scrollTop:$(document).height()}, 'slow');
  }