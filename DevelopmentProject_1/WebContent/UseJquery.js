/**
 * use of .click() in jquery
 */

$(document).ready(function(){

	/*Function to open Home page*/	
$( "#index_home" ).click(function() {
document.location.href="index.html";
});
/*Function to open Summary page*/
$( "#index_summary" ).click(function() {
document.location.href="summary.html";
});

/*Function to open Education page*/
$( "#index_education" ).click(function() {
document.location.href="Education.html";
});

/*Function to open Experience page*/
$( "#index_experience" ).click(function() {
document.location.href="Experience.html";
});
/*Function to open Contact form */
$( "#index_contact" ).click(function() {
	document.location.href="Contact.html";
	});

});
