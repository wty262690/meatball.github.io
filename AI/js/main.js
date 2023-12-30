var alltext="", alltextline="", inputtext="";
var allline = [], lineindex = []; 

var textindex = 0;
function readTextFile(filename) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", "./word/" + filename + ".txt", true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4) {
            console.log("loading" + filename)
            alltext = rawFile.responseText;
            alltextline = alltext.split('\n');
            var i = 0;
            switch(filename){
                case "Taiwan": i = 0; break;
                case "Taiwanese": i = 1; break;
                case "CameraImage": i = 2; break;
                case "CameraImage3": i = 3; break;
                default: i=4; break;
            }
            allline[i] = alltextline;
            lineindex[i] = 1;
            textindex ++;
        }
    }
    rawFile.send();
}

function delay(milliseconds){
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}

async function typing(word, element, time){
    istyping = true;
    element.innerHTML = "";
    for (var w=0; w < word.length; w++ ){
        element.innerHTML += word[w];
        await delay(time);
    }
    istyping = false;
}


async function InputWord(index, keyword, lines, imagetype){
    document.getElementById(keyword + "-image").innerHTML = '<div class= "work centerparent child imagparent" id = "imagparent"><div class="work centerparent child promtimg" id="' + keyword + '-promtimg""></div></div><div class="work child prompt" id = "' + keyword + '-prompt">' +"</div>";
    img = document.getElementById(keyword + "-promtimg");
    img.style['background-image'] = "url(./image/image"+keyword+"/"+(lineindex[index])+imagetype;
    console.log("loading")
    img.addEventListener("load", (event) => {
        const { naturalWidth, naturalHeight, width, height } = img;
        if (naturalWidth > naturalHeight){
            img.style['height'] = "auto"
            img.style['width'] = "100%"
        }
        else{
            img.style['height'] = "100%"
            img.style['width'] = "auto"
        }
    });
    typing(lines[lineindex[index]], document.getElementById(keyword + "-prompt"),100).then(() => {
        delay(1000).then(() => {
        inputtext = "<div>" + lines[lineindex[index]]+ "</div>";
        document.getElementById(keyword + "-word").innerHTML = inputtext + document.getElementById(keyword + "-word").innerHTML;
        addwordline(index);
        InputWord(index, keyword, lines, imagetype);
        })
    })
}

function addwordline(index){
    lineindex[index] ++ ;
    lineindex[index] = lineindex[index] % allline[index].length;
}