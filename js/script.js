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

window.onload = function checkDark() {
	if(document.cookie.indexOf('darkMode=')) {
		document.body.className = document.body.className.replace("dark", "");
	} else {
		document.body.classList.add("dark");
	}
}