const path = "./html/drawing/";
const StoryList = [
    {
        type : '插畫',
        typevalue : 'illustration',
        name : [],
        namevalue : [],
    },
    {
        type : '漫畫',
        typevalue : 'comic',
        name : [],
        namevalue : [],
    },
    {
        type : '傳統美術',
        typevalue : 'traditional',
        name : ['塗鴉','素描'],
        namevalue : ['doodle','sketch'],
    },
    {
        type : '其他合作成果',
        typevalue : 'commercial',
        name : ['舞者葉夜','清華大學第二屆新生領航營','藝穗節暴風雨之夜'],
        namevalue : ['YA','freshman','freshman','rainday'],
    },
];
var ComicTitle = [];
    const Imagebar = [
        /*
        {
            name: 'Mazu-a',
            link:["https://i.imgur.com/YKYfdIi.jpg","https://i.imgur.com/lZhkCV9.jpg","https://i.imgur.com/DJh0651.jpg","https://i.imgur.com/89ot71s.jpg"
            ]
        },
        {
            name: 'Mazu-b',
            link:["https://i.imgur.com/BDeiSRr.jpg","https://i.imgur.com/Hh3nZRT.jpg","https://i.imgur.com/3pPhdTR.jpg","https://i.imgur.com/rROw2ZS.jpg"]
        },
        {
            name: 'Mazu-c',
            link:["https://i.imgur.com/d0f2yPn.jpg","https://i.imgur.com/sCegBYH.jpg","https://i.imgur.com/e8mLEXu.jpg"]
        }*/
    ];

    var player = [];
    var list = ['sg7ynqgVls0','n1duMprKXnI']
    function controlVideo(vidFunc, index){
        switch (index){
        default : {
            player[index].pauseVideo();
        }
    }

    }

function windowsize(){
    var blocksize = 0;
    if ($(window).width()*(90/100)<=1000){
        if ($("input[name='menu-open']")[0].checked==true || $("input[name='menu-open']")[1].checked==true ){
            $(".block").css("width","65vw");
            blocksize = 65;
        }
        else{	
            $(".block").css("width","85vw");
            blocksize = 85;
        }
    }
    else{
        if ($("input[name='menu-open']")[0].checked==true || $("input[name='menu-open']")[1].checked==true ){
            $(".block").css("width","75vw");
            blocksize = 75;
        }
        else{
            $(".block").css("width","85vw");
            blocksize = 85;
        }
    }
    //comicsize();

    if ($(window).width() *blocksize/100 < $(window).height()){
        $("#zoomwindow-img").css("width","90%");
        $("#zoomwindow-img").css("height","auto");
    }
    else{
        $("#zoomwindow-img").css("width","auto");
        $("#zoomwindow-img").css("height","85vh");
    }

}
$(document).ready(function(){
    console.log("document ready")
    $("input[name='int']").each(function(){
        this.onclick=function(){
            if(this.checked) {
                var file = new XMLHttpRequest();
                file.open("GET", "word/"+this.value+".txt");
                var idname=this.value+"-fileOutput";
                file.onreadystatechange = function() {
                    if (file.readyState === 4) {
                        var allText = file.responseText;
                        document.getElementById(idname).innerHTML = "<br>"+allText;
                        }
                    }
                file.send(null);
            }
        }
    });
    $('head').append('<script src="js/youtube.js?ver='+ config.version + '"><' + '/script>');
    var storyopen= setInterval(() => {
        try{
            createstorylist();
            document.getElementsByClassName('story-open')[0].checked = true;
            clicktype(document.getElementsByClassName('story-open')[0]);        
            clearInterval(storyopen)
        }
        catch(e){}
    }, 1000);
    windowsize();
    var endload= setInterval(() => {
        try{
            endloading();
            clearInterval(endload)
        }
        catch(e){}
    }, 1000);
    console.log("document end")
});

window.onload=function(){
    console.log("window onload")
    //$('#loading').load('loading.html');
    //$('.menu').load('menu.html');

    /*
    comicsize();
    for (var i=0, length=ComicTitle.length; i<length; i++){
        comicpage(ComicTitle[i]);
    }
    for (var i=0, length=Imagebar.length; i<length; i++){
        comicpage(Imagebar[i]);
    }
    */
    //createstorylist();
    console.log("window end")
}

function zoom(img){
    var zoomimg = document.getElementById("zoomwindow-img");
    zoomimg.src = img.getAttribute('src')
    $("#zoomwindow").css('visibility', 'visible');
    $("#zoomwindow").css('opacity', '1');

}
function zoomclose(){
    var zoomimg = document.getElementById("zoomwindow-img");
    zoomimg.src = "";
    $("#zoomwindow").css('visibility', 'hidden');
    $("#zoomwindow").css('opacity', '0');
}


$(window).resize(function(){
    windowsize()
});
$(document).on ("click", ".artwork", function () {
    zoom(this);
});
var cot=0;
function nex(){
console.log(Imagebar[0].link.length);
if(cot< Imagebar[0].link.length-1){
    cot++;
    var move=-cot*25+'%'
    $('.imgs').animate({'margin-left':move},500)
}
}
function pre(){
    if(cot>0){
    cot--;
    var move=-cot*25+'%';
    $('.imgs').animate({'margin-left':move},500)
    }
}