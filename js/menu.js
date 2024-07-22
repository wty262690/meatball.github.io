$(document).ready(function(){
    var old=null;
    $("input[name='menu-open']").each(function(){
        if(this.checked){
            old=this;
        }
        this.onclick=function(){
            if(this==old){
                this.checked=false;
                old=null;
                /*---index---*/
                $(".content").css("width", "100vw");
                /*---writing---*/
                $(".block").css("width","85vw")
                $(".cover").css("width","85vw")
                $("#cover-word").css("width","85vw")
                $(".block").css("padding-left","10px")
                $(".block").css("padding-right","10px")
                /*---int---*/
                $(".illustration").css("right","0vw")
                if ($(window).width()*(40/100)>=400){
                    $(".profile").css("margin-left","6vw");
                }
                else{
                    $(".profile").css("margin-left","10vw");
                }
            } 
            else{
                old=this;
                $(".block").css("width","75vw")
                $(".cover").css("width","75vw")
                $("#cover-word").css("width","75vw")
                
                if (this.id=="menu-open"){
                    /*---index---*/
                    $(".content").css("width", "85vw");
                    /*---writing---*/
                    $(".block").css("padding-left","0px")
                    $(".block").css("padding-right","13vw")
                    /*---int---*/
                    $(".profile").css("margin-left","1.5vw")
                    $(".illustration").css("right","5vw")
                }
                else if (this.id=="list-open"){
                    $(".block").css("padding-left","13vw")
                    $(".block").css("padding-right","0px")
                }
            }
            windowsize();
        }
    });
});