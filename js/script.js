/* DARK MODE function */
	/* toggles dark mode when clicking on dark mode button */
function darkMode() {
	if(getCookie("darkMode")) {
		document.cookie = "darkMode=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
		document.body.className = document.body.className.replace("dark", "");
	} else {
		document.cookie = "darkMode=true; expires=Wed, 18 Dec 2026 12:00:00 GMT";
		document.body.classList.add("dark");
	}
}

/* GET Parameter from URL (for clickid) */
var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);
var clickid = urlParams.get('clickid');

/* After DOM is loaded */
window.onload = function afterLoad() {
	/* Check if dark mode cookie exists, and if it's activated or not */
	if(document.cookie.indexOf('darkMode=')) {
		document.body.className = document.body.className.replace("dark", "");
	} else {
		document.body.classList.add("dark");
	}
	
	/* Change the href="offer" into href="https://track.ultravpn.com/5d02892a4faea/click/[clickid]" */
	var offerButtons = document.querySelectorAll('[href="offer"]');
	offerButtons.forEach(elem => {
		if(clickid != null && clickid != "") {
			ext = clickid;
		} else {
			ext = "default";
		}
		elem.href = "https://track.ultravpn.com/5d02892a4faea/click/" + ext;
	});
}

/* GET COOKIE function (for dark mode)*/
	/* returns the cookie name + value */
	/* Took it from w3schools website */
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