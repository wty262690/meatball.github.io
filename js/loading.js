function endloading()
{
    var timeoutID = window.setInterval(( () => console.log("Hello!") ), 10);
    window.clearInterval(timeoutID);
    var objLoading = document.getElementById("loading");   
    if (objLoading != null)   
    {   
        objLoading.style.display = "none";   
    }   
}