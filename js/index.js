$(document).ready(function () {
    //$('#loading').load('loading.html?v='+ config.version);
    //$('.menu').load('menu.html?v='+ config.version);
});
window.onload= function(){
    var endload= setInterval(() => {
        try{
            endloading();
            clearInterval(endload)
        }
        catch(e){}
    }, 1000);
}
function windowsize(){}

