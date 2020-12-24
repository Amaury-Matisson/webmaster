function darkMode() {
	var darkMode = getCookie("darkmode");
	if(darkMode != null) {
		document.cookie = "darkmode=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
	} else {
		document.cookie = "darkmode=1; expires=Wed, 18 Dec 2026 12:00:00 GMT";
	}
}

var darkMode = getCookie("darkmode");
if(darkMode == "1") {
	document.body.classList.add('dark');
}

function displayCookies() {
	var fname=getCookie("darkmode");
	if (fname==null) {fname="";}
	if (fname!="") {fname="darkmode="+fname;}
	alert (fname);
}

function getCookie(name) {
	var nameEQ = name + "=";
	//alert(document.cookie);
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1);
		if (c.indexOf(nameEQ) != -1) return c.substring(nameEQ.length,c.length);
	}
	return null;
} 