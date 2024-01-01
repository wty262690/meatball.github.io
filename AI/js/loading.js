var isloading = true;
function loading(){
    //typing("人機互動", document.getElementById("loadingtitle"),200);
    var next = true;
    let smalltitleopacity = setInterval(() => {
        if (!istyping && next){
            next = false;
            //typing("human–computer interaction", document.getElementById("loadingsmalltitle"),100);
            document.getElementById("loadingsmalltitle").style.opacity = 1;
        }
        else if (!istyping && !next){
            endloading();
            clearInterval(smalltitleopacity);
        }
    }, 2000);
}

function workstart()
{
    var objLoading = document.getElementById("loading");   
    
    if (objLoading != null)   
    {   
        //objLoading.style.opacity = 0;
        InputWord();
        let set_InputWord = setInterval(() => {
            console.log(lineindex[0]);
            if (allline[0][0] != undefined) {
                InputWord(0, "Taiwan", allline[0], ".jpg");
                clearInterval(set_InputWord);
            }
        }, 2000);   
        let set_MoveDrawPosition = setInterval(() => {
            MoveDrawPosition();
        }, 1000);
        setgenposition();
        let set_setgenposition = setInterval(() => {
            setgenposition();
        }, genspeed * 1000);  
        let intervalID = setInterval(() => {
                //objLoading.style.display = "none";
                endload()
                isloading = false;
                clearInterval(intervalID);
            }, 1000);   
    }   
    

}
