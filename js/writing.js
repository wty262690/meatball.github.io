
        const StoryListName = [
        {
            value:['hero','beleive','Cthulhu','robothuman','Cradles','insomnai'],
            name:['英雄夢','貫徹的信念','克蘇魯&#x2015;聖誕夜','固有色','把一首歌寫成一篇短篇小說','失眠的人 &#8901; 和 &#8901; 失眠的人'],
            load:[],
            story:[],
            wordnum:[],
        }
        ]
        for(var i=0, length=StoryListName[0].value.length; i<length; i++){
            StoryListName[0].story.push('');
            StoryListName[0].wordnum.push(0);
            StoryListName[0].load.push(false);         
                const xhttp = new XMLHttpRequest();
                xhttp.onload = function() {
                    var allText = this.responseText;
                    var Url=this.responseURL;
                    Url= Url.split(/[\\/]/g).pop().split('.')[0];
                    var index = StoryListName[0].value.indexOf(Url);
                    StoryListName[0].story[index]=allText;
                    StoryListName[0].wordnum[index]=getWordCount(allText);
                    createstorylist();
                }
                xhttp.open("GET", "word/"+StoryListName[0].value[i]+".txt");
                xhttp.send(null);
        }
        function createstorylist(){
            var storylist=document.getElementById('story-list');
            for(var i=0, length=StoryListName[0].value.length; i<length; i++){
                if (StoryListName[0].wordnum[i]==0) break;
                if (StoryListName[0].load[i]) continue;
                storylist.innerHTML+="<label class='story-open-button'><input type='radio' class='story-open' name='story-open' value='"+StoryListName[0].value[i]+"' onclick='clicktitle()'/><span id='"+StoryListName[0].value[i]+"'>"+StoryListName[0].name[i]+"</span><div class='numofword'>"+StoryListName[0].wordnum[i]+"字</div><div class='list-br'></div></label>";
                StoryListName[0].load[i]=true;
            }
        }
        window.onload= function(){
            endloading();
        }
        function getWordCount(str){
            str=str.replace(/<.{1,}>/gi,'');
            str=str.replace(/[，……。'！......？—」「。、：-]/gi,'');
            str=str.replace(/[(),:;～”“－·《》?/]/gi,'');
            str=str.replace(/\w{1,}/g,'t');
            str=str.replace(/\s+/g,'');
            return str.length;
        }
        var oldstory=null;
        function clicktitle(){
            var radios = document.getElementsByClassName('story-open');
            var title = document.getElementById("title");
            
            for (var i = 0, length = radios.length; i < length; i++) {
                if (radios[i].checked) {
                    if(radios[i]==oldstory){
                        $(".cover").fadeIn(1000,function t(){                        
                            oldstory=null;
                            title.innerHTML=""
                            document.getElementById("fileOutput").innerHTML = "";
                        });
                        radios[i].checked=false;
                    }
                    else{
                        $(".cover").fadeOut(1000);
                        oldstory=radios[i];
                        var storytitle = document.getElementById(radios[i].value);
                        title.innerHTML="<p class='title story-title'>"+storytitle.textContent+"</p>"

                        document.getElementById("fileOutput").innerHTML = "<br>"+StoryListName[0].story[i]+"<div class='buttom'></div>";
                        window.scrollTo(0,0);
                        break;
                    }
                }
            }
        }
        function endloading()
        {
            var objLoading = document.getElementById("loading");   
            if (objLoading != null)   
            {   
                objLoading.style.display = "none";   
            }   
        }

        $( window ).scroll(function() {
            $( ".list-open-button" ).css( "background-position-y",-($(window).scrollTop()));
        });
