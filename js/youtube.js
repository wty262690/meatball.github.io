var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


function onYouTubeIframeAPIReady() {
    console.log("video");
    var video = document.getElementsByClassName('video');
    for (var i =0; i < video.length; i++){
        player[i] = new YT.Player('video'+i, {
        videoId: list[i],
        playerVars: {
            'playsinline': 1
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
        });
    }
}
function onPlayerReady(event) {}
function onPlayerStateChange(event) {}