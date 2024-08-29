function endloading()
{
    $(".maincontent").css("opacity","1");
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