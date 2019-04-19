/**
 * Cookies Assignment 7
 */
$(function(){

	/* To get check user is returning user or new user and give alert */
	var user=getCookie("username");
	if (user != "") {	
		document.getElementById("user").innerHTML = "Hello, " + user;
		alert("Welcome again " + user);
	} else {
	   user = prompt("Please enter your name:","");
	   if (user != "" && user != null) {
		   setCookie("username", user, 30);
		   document.getElementById("user").innerHTML = "Hello, " + user;
	   }
	}
	/* Storing the vistor name */
function setCookie(cname,cvalue,exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

/* get the vistors name */
function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
}
);

