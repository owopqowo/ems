var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player1,
player2,
player3,
player4;

function onYouTubeIframeAPIReady() {
	player1 = new YT.Player('player1', {
		videoId: 'M7lc1UVf-VE',
		playerVars: {
			'rel': 0
		},
		events: {
			'onStateChange': onPlayerStateChange
		}
	});
	player2 = new YT.Player('player2', {
		videoId: 'M7lc1UVf-VE',
		playerVars: {
			'rel': 0
		},
		events: {
			'onStateChange': onPlayerStateChange
		}
	});
	player3 = new YT.Player('player3', {
		videoId: 'M7lc1UVf-VE',
		playerVars: {
			'rel': 0
		},
		events: {
			'onStateChange': onPlayerStateChange
		}
	});
	player4 = new YT.Player('player4', {
		videoId: 'M7lc1UVf-VE',
		playerVars: {
			'rel': 0
		},
		events: {
			'onStateChange': onPlayerStateChange
		}
	});
}

function playVideo1(){
	document.getElementById('player1').style.zIndex=10;
	document.getElementById('player2').style.zIndex=-10;
	document.getElementById('player3').style.zIndex=-10;
	document.getElementById('player4').style.zIndex=-10;
	player1.playVideo();
	player2.stopVideo();
	player3.stopVideo();
	player4.stopVideo();
}

function playVideo2(){
	document.getElementById('player1').style.zIndex=-10;
	document.getElementById('player2').style.zIndex=10;
	document.getElementById('player3').style.zIndex=-10;
	document.getElementById('player4').style.zIndex=-10;
	player2.playVideo();
	player1.stopVideo();
	player3.stopVideo();
	player4.stopVideo();
}

function playVideo3(){
	document.getElementById('player1').style.zIndex=-10;
	document.getElementById('player2').style.zIndex=-10;
	document.getElementById('player3').style.zIndex=10;
	document.getElementById('player4').style.zIndex=-10;
	player3.playVideo();
	player1.stopVideo();
	player2.stopVideo();
	player4.stopVideo();
}

function playVideo4(){
	document.getElementById('player1').style.zIndex=-10;
	document.getElementById('player2').style.zIndex=-10;
	document.getElementById('player3').style.zIndex=-10;
	document.getElementById('player4').style.zIndex=10;
	player4.playVideo();
	player1.stopVideo();
	player2.stopVideo();
	player3.stopVideo();
}

function onPlayerStateChange(event) {
	if(event.data === 0) {
		document.getElementById('player1').style.zIndex=-10;
		document.getElementById('player2').style.zIndex=-10;
		document.getElementById('player3').style.zIndex=-10;
		document.getElementById('player4').style.zIndex=-10;
	}
}
