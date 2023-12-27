var isloading = true;
function loading(){
    typing("人機互動", document.getElementById("loadingtitle"),200);
    var next = true;
    let smalltitleopacity = setInterval(() => {
        //console.log("display");
        if (!istyping && next){
            next = false;
            typing("human–computer interaction", document.getElementById("loadingsmalltitle"),100);
            document.getElementById("loadingsmalltitle").style.opacity = 1;
        }
        else if (!istyping && !next){
            endloading();
            clearInterval(smalltitleopacity);
        }
    }, 2000);
}

function endloading()
{
    var objLoading = document.getElementById("loading");   
    //typing(document.getElementById("loadingsmalltitle").innerText, document.getElementById("loadingsmalltitle"));
    
    if (objLoading != null)   
    {   
        objLoading.style.opacity = 0;
        InputWord();
        let set_InputWord = setInterval(() => {
            console.log(istyping);
            if (alltext != "" && !istyping) {
                InputWord();
            }
        }, 2000);   
        let set_MoveDrawPosition = setInterval(() => {
            console.log(istyping);
            MoveDrawPosition();
        }, 1000);
        setgenposition();
        let set_setgenposition = setInterval(() => {
            console.log("???????");
            setgenposition();
        }, genspeed * 1000);  
        let intervalID = setInterval(() => {
            //console.log("display");
                objLoading.style.display = "none";
                isloading = false;
                clearInterval(intervalID);
            }, 5000);   
    }   
    

}
