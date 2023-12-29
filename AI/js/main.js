function readTextFile(filename) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", "./word/" + filename + ".txt", true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4) {
            alltext = rawFile.responseText;
            alltextline = alltext.split('\n');
        }
    }
    rawFile.send();
}

function typing(word, element, time){
    istyping = true;
    w = 0;
    //console.log("typing");
    element.innerHTML = "";
    let typeword = setInterval(() => {
        element.innerHTML += word[w];
        //console.log(word[w]);
        if (w == word.length-1) {
            istyping = false;
            clearInterval(typeword);
        }
            else w ++;
    }, time);   
}