function comicsize(){
    var comic=document.getElementsByClassName("comic");
    const element = document.querySelector('.block');
    var s = element.style.width.split('vw')[0];
    s = s.split('%')[0];
    console.log(s)
    for (var i = 0, length = comic.length; i < length; i++){
        var commicwidth = self.innerWidth * s /100;
        var t=commicwidth/ComicTitle[i].size*ComicTitle[i].displaysize+"px";
        comic[i].style.height=t;
        console.log(t);
        var display=document.getElementById(ComicTitle[i].name+"display");
        display.style.height=t;
        console.log('next', t);
    }
}

function comicpage(array){
    var comic=document.getElementById(array.name);
    for(var i=0, length=array.link.length; i<length; i++){
    comic.innerHTML+="<img src='"+array.link[i]+"' class='artwork' alt='comic pages' referrerpolicy='no-referrer'/>";
    }
}
function imagebar(array){
    var image=document.getElementById(array.name);
    for(var i=0, length=array.link.length; i<length; i++){
    image.innerHTML+="<img src='"+array.link[i]+"' class='artwork' alt='images in image bar' referrerpolicy='no-referrer'/>";
    }
}

