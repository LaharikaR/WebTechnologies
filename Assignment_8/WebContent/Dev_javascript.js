/* * the below funtion is to display my name */function myFunction(){document.getElementById("myname").innerHTML="Laharika Ravula";}/** * the below funtion is to validate Email */function validateEmail(emailField){var reg=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/; if (reg.test(emailField.value)==false){alert('Invalid Email Address'); return false;}return true;}