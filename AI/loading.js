function endloading()
{
    var timeoutID = window.setInterval(( () => console.log("Hello!") ), 10);
    window.clearInterval(timeoutID);
    var objLoading = document.getElementById("loading");   
    if (objLoading != null)   
    {   
        objLoading.style.opacity = 0;
        let intervalID = setInterval(() => {
            console.log("display");
            objLoading.style.display = "none"
        }, 1000);   
        clearInterval(intervalID);
    }   
}
