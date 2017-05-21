console.log("js");

var audio = document.getElementById('background_audio');

document.getElementById('mute').addEventListener('click', function(e) {
    console.log("clicked/muted");
    e = e || window.event;
    audio.muted = !audio.muted;
    e.preventDefault();
}, false);

$(document).ready(function(){
	$('.mute').on('click', function(e){
		$('#muted').toggleClass('muted');
	});
});

$(document).keyup(function(e){
	if (e.keyCode == 32) {
		$('#muted').toggleClass('muted');
		e = e || window.event;
    	audio.muted = !audio.muted;
    	e.preventDefault();
	};

});