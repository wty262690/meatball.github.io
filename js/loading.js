function endloading()
{
    $(".maincontent").css("visibility","visible");
    var objLoading = document.getElementById("loading");
    objLoading.style.opacity = "0";
    setTimeout(() => {
        if (objLoading != null)   
        {   
            objLoading.style.display = "none";   
        }   
        console.log("endloading");
    }, "2100");
}