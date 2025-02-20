function windowsize() {
    var radios = document.getElementsByClassName('menu-open');
    if ($(window).width()*(40/100)>=400){
            $(".photoblock").css("float","left");
            $(".photoblock").css("width","45%");
            for (var i = 0, length = radios.length; i < length; i++) {
                if (!radios[i].checked) {$(".profile").css("margin-left","6vw");}
            }
            $(".wordblock").css("float","left");
            $(".wordblock").css("width","45%");
            $(".webiconblock").css("text-align","left");
            $(".illustration").css("width","40vw");
            $(".illustration").css("position","absolute");
        }
        else{
            $(".photoblock").css("width","100%");
            $(".photoblock").css("float","none");
            for (var i = 0, length = radios.length; i < length; i++) {
                if (!radios[i].checked) {$(".profile").css("margin-left","10vw");}
            }
            $(".wordblock").css("float","none");
            $(".wordblock").css("width","100%");
            $(".webiconblock").css("text-align","center");
            $(".illustration").css("width","80vw");
            $(".illustration").css("position","relative");
        }
}

$(document).ready(function () {
    //$('#loading').load('loading.html');
    //$('.menu').load('menu.html');
    windowsize();
});

window.onload=function(){
    var file = new XMLHttpRequest();
    file.open("GET", "word/introduciton.txt", false);
    $("input[name='int']").each(function(){
        this.onclick=function(){
            var idname=this.value+"-fileOutput";
            var ouputelment = document.getElementById(idname);
            if(this.checked) {
                var file = new XMLHttpRequest();
                file.open("GET", "word/"+this.value+".txt");
                file.onreadystatechange = function() {
                    if (file.readyState === 4) {
                        var allText = file.responseText;
                        ouputelment.innerHTML = allText;
                        $("#" + idname).css({
                            'visibility' : "visible",
                            'opacity': '1',
                            'left': "0%",
                        });
                        }
                    }
                file.send(null);
            }
            else{
                $("#"+idname).css({
                    'visibility' : "hidden",
                    'opacity': '0',
                    'left': "100%",
                });
            }
        }
    });
    file.onreadystatechange = function() {
        if (file.readyState === 4) {
            var allText = file.responseText;
            document.getElementById("fileOutput").innerHTML = allText;
            }
        }
    file.send(null);
    windowsize();
    var endload= setInterval(() => {
        try{
            endloading();
            clearInterval(endload)
        }
        catch(e){}
    }, 1000);
}


$(window).resize(function(){
    windowsize();
});