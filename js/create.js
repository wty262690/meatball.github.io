const path = "./html/create/";
const StoryList = [
    {
        type : '虛擬實境',
        typevalue : 'VR',
        name : ['RUN?RUN...RUN!', '人偶 THE DOLL', 'SHADOW BOXING VR'],
        namevalue : ['run', 'Doll', 'ShadowBoxing'],
    },
    {
        type : '遊戲設計',
        typevalue : 'game',
        name : ['偶遇 THE PUPPET', '女巫的贗品'],
        namevalue : ['Puppet', 'witch'],
    },
    {
        type : '網頁設計',
        typevalue : 'web',
        name : ['光合藝術玻璃有限公司官網', '畢業展心理測驗網站'],
        namevalue : ['light','signal'],
    },
    {
        type : 'AI藝術',
        typevalue : 'AI',
        name : ['人機互動'],
        namevalue : ['hmi'],
    },
    {
        type : '互動影像',
        typevalue : 'ReactiveWork',
        name : ['我'],
        namevalue : ['me'],
    },
    {
        type : '數位製造',
        typevalue : 'Maker',
        name : ['關不掉的鬧鐘', '下雨了嗎?'],
        namevalue : ['clock', 'rain'],
    },
    {
        type : '仿生藝術',
        typevalue : 'bio',
        name : ['EAP電活性聚合物'],
        namevalue : ['eap'],
    },
];
var ComicTitle = [];
const Imagebar = [
    ];

function windowsize(){
    if ($(window).width()*(90/100)<=1000){
        if ($("input[name='menu-open']")[0].checked==true || $("input[name='menu-open']")[1].checked==true ){
            $(".block").css("width","65vw");
        }
        else{	
            $(".block").css("width","85vw");
        }
    }
    else{
        if ($("input[name='menu-open']")[0].checked==true || $("input[name='menu-open']")[1].checked==true ){
            $(".block").css("width","75vw");
        }
        else{
            $(".block").css("width","85vw");
        }
    }
    comicsize();
}

$(document).ready(function(){
    /*
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
    */
    var storyopen= setInterval(() => {
        try{
            document.getElementsByClassName('story-open')[0].checked = true;
            clicktype(document.getElementsByClassName('story-open')[0]);        
            clearInterval(storyopen)
        }
        catch(e){}
    }, 1000);
});

window.onload=function(){
    /*
    for (var i=0, length=Imagebar.length; i<length; i++){
        comicpage(Imagebar[i]);
    }
    */
    $('#loading').load('loading.html');
    $('.menu').load('menu.html');
    $('head').append('<link href="css/create.css?v=' + config.version + '" rel="stylesheet" />');
    $('head').append('<script src="js/youtube.js?ver='+ config.version + '"><' + '/script>');
    $('head').append('<script src="js/list.js?ver='+ config.version + '"><' + '/script>');	
    $('head').append('<script src="js/comic.js?ver='+ config.version + '"><' + '/script>');
}
$(window).resize(function(){
    windowsize();
});



var player = [];
var list = ['MDcvo3Y63ZM','K3UH0omlYas','sACBsbbM3CI']
function controlVideo(vidFunc, index) {
    switch (index){
        case -1 : {
            document.getElementById('floor2-video1').checked = false;
            document.getElementById('floor2-video2').checked = false;
            player[1].pauseVideo();
            player[2].pauseVideo();
            break;
        }
        case 1 : {
            player[1].pauseVideo();
            player[2].pauseVideo();
            document.getElementById('floor2-video2').checked = false;
            break;
        }
        case 2 : {
            player[1].pauseVideo();
            player[2].pauseVideo();
            document.getElementById('floor2-video1').checked = false;
            break;
        }
        default : {
            player[index].pauseVideo();
        }
    }
}
