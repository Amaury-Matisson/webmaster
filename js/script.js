function darkMode() {
	var darkMode = getCookie("darkMode");
	if(darkMode) {
		document.cookie = "darkMode=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
		document.body.className = document.body.className.replace("dark", "");
	} else {
		document.cookie = "darkMode=true; expires=Wed, 18 Dec 2026 12:00:00 GMT";
		document.body.classList.add("dark");
	}
}

function getCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1);
		if (c.indexOf(nameEQ) != -1) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);
var clickid = urlParams.get('clickid');

window.onload = function checkDark() {
	if(document.cookie.indexOf('darkMode=')) {
		document.body.className = document.body.className.replace("dark", "");
	} else {
		document.body.classList.add("dark");
	}
	
	var offerButtons = document.querySelectorAll('[href="offer"]');
	offerButtons.forEach(elem => {
		if(clickid != null) {
			ext = clickid;
		} else {
			ext = "default";
		}
		elem.href = "https://track.ultravpn.com/5d02892a4faea/click/" + ext;
	});
}