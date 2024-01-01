const $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body')
var numOfPages = 2,
    curPage = 0, 
    scrollLock = false; 
function scrollPage() {
    $(document).on("mousewheel DOMMouseScroll", function(e) {
        if (scrollLock) return;
        if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0)
        navigateUp();
        else
        navigateDown();
});

$(document).on("keydown", function(e) {
    if (scrollLock) return;
    if (e.which === 38)
    navigateUp();
    else if (e.which === 40)
    navigateDown();
});
}

function navigateUp () {
    if (curPage === 0) return;
        curPage--;
        pagination();
};

function navigateDown() {
    if (curPage === numOfPages) return;
        curPage++;
        pagination();
};

function pagination() {
    scrollLock = true;
    $body.stop().animate({
        scrollTop: (curPage-1)*height
    }, 1000, function(){
        scrollLock = false;
    });
};