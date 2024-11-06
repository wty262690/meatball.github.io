function comicsize(){
    var comic=document.getElementsByClassName("comic");
    const element = document.querySelector('.block');
    console.log(document)
    var s = element.style.width.split('vw')[0];
    s = s.split('%')[0];
    console.log(comic)
    var maxheight = self.innerHeight * 0.85;
    for (var i = 0; i < ComicTitle.length; i++){
        var commicwidth = self.innerWidth * s /100;
        console.log(ComicTitle[i])
        var t=commicwidth/ComicTitle[i].size*ComicTitle[i].displaysize;
        var display=document.getElementById(ComicTitle[i].name+"display");
        let child = display.querySelector('.comic');
        if (t >=  maxheight){
            var w = maxheight * ComicTitle[i].size;
            child.style.width = w +'px';
            child.style.height= maxheight +"px";
            display.style.width =  w + 'px';
            display.style.height= maxheight +"px";
        }
        else{
            child.style.width= ComicTitle[i].displaysize * 100 +'%';
            child.style.height=t +"px";
            display.style.width='100%';
            display.style.height= t +"px";
        
        }
    }
}

function comicpage(array){
    var comic=document.getElementById(array.name);
    for(var i=0, length=array.link.length; i<length; i++){
        comic.innerHTML+="<img loading='lazy' src='"+array.link[i]+"' class='artwork' alt='comic pages' referrerpolicy='no-referrer'/>";
    }
}
function imagebar(array){
    var image=document.getElementById(array.name);
    for(var i=0, length=array.link.length; i<length; i++){
    image.innerHTML+="<img loading='lazy' src='"+array.link[i]+"' class='artwork' alt='images in image bar' referrerpolicy='no-referrer'/>";
    }
}

function createcomic(){
    for (var i=0, length=ComicTitle.length; i<length; i++){
		comicpage(ComicTitle[i]);
	}
	comicsize();
}