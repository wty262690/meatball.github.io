function createstorylist(){
    var storylist=document.getElementById('story-list');
    for(var i=0; i<StoryList.length; i++){
        storylist.innerHTML+="<label class='story-open-button'><input type='radio' class='story-open type-open' name='type-open' value='"+StoryList[i].typevalue+"' onclick='clicktype(this)'/><span id='"+StoryList[i].typevalue+"'>"+StoryList[i].type+"</span><div class='list-br'></div><div id='"+StoryList[i].typevalue+"-sub' class='type-list'></div></label>";
        var typediv = document.getElementById(StoryList[i].typevalue+'-sub');
        for (var j=0; j<StoryList[i].name.length; j++){
            typediv.innerHTML+="<label class='substory-open-button type-item'><input type='radio' class='story-open' name='story-open' value='"+StoryList[i].namevalue[j]+"' onclick='clickstory()'/><span id='"+StoryList[i].namevalue[j]+"'>"+StoryList[i].name[j]+"</span><div class='list-br'></div></label>";
        }
    }
}
function clicktype(el){
    var type = document.getElementsByClassName('type-block');
    for(var i =0; i < type.length; i++){
        var t = type[i];
        if (t.getAttribute( 'id' ) == el.getAttribute( 'value' ) +'-block'){
            t.style.display = "block";
        }
        else{
            t.style.display = "none";
        }
    }
}
function clickstory(){}
