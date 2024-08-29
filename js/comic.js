function comicsize(){
    var comic=document.getElementsByClassName("comic");
    const element = document.querySelector('.block');
    var s = element.style.width.split('vw')[0];
    s = s.split('%')[0];
    var maxheight = self.innerHeight * 0.85;
    for (var i = 0, length = comic.length; i < length; i++){
        var commicwidth = self.innerWidth * s /100;
        var t=commicwidth/ComicTitle[i].size*ComicTitle[i].displaysize;
        var display=document.getElementById(ComicTitle[i].name+"display");
        if (t >=  maxheight){
            var w = maxheight * ComicTitle[i].size;
            comic[i].style.width = w +'px';
            comic[i].style.height= maxheight +"px";
            display.style.width = w +'px';
            display.style.height= maxheight +"px";
        }
        else{
            comic[i].style.width= ComicTitle[i].displaysize * 100 +'%';
            comic[i].style.height=t +"px";
            display.style.width='100%';
            display.style.height= t +"px";
        
        }
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

