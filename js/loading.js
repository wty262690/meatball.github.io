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
    }, "2100");
}

/*
$(document).ready(function () {
    endloading();
})
*/

window.onload = function(){
    console.log("endloading")
    endloading();
}
