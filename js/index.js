$(document).ready(function () {
});
window.onload= function(){
    $('#loading').load('loading.html?v='+ config.version);
	$('head').append('<link href="css/index.css?v=' + config.version + '" rel="stylesheet" />');
    $('.menu').load('menu.html?v='+ config.version);
}
function windowsize(){}

