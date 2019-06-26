document.body.style.backgroundColor ="grey";
document.getElementById("PHONEBOOK").style.textAlign ="center";

 	var submit=document.getElementById("submit") ;
		submit.onclick=function Contact(first_name,Last_name,phone_number,email,adress)
{
	var first_name=getElementById("first_name").value;
	var Last_name=getElementById("Last_name").value;
	var phone_number=getElementById("phone_number").value;
	var email= getElementById("email").value;
	var address=getElementById(["street","city","country"].value);

document.getElementById("outputfirst_name").innerText=first_name
document.getElementById("outputLast_name").innerText=Last_name
document.getElementById("outputphone_number").innerText=phone_number
document.getElementById("outputemail").innerText=email
document.getElementById("outputaddress").innerText=address
}
Contact.prototype.full_name = function() {
	return (this.first_name + " , " + this.Last_name)
};

<!DOCTYPE html>
<html>
<head>new contact</head>
<title>PHONEBOOK</title>
<body>
	<div id=PHONEBOOK> 
	<form name="PHONEBOOK" id="PHONEBOOK" action="javascript:saveData(Contacts);">
		First name:<br>
  <input id="first_name"type="text" name="firstname" value="">
  <br>
  		Last_name name:<br>
  <input id="Last_name" type="text" name="lastname">
  <br>
  		Phone number:<br>
  <input id="phone_number"type="text" name="your digits here">
  <br>
  		Email:<br>
  <input id="email" type="text" name="email address">
  <br>
  		Address:<br>
  <input type="text" name="where you stay">
  <br>

  <button id=submit>save</button>

	</div>
	</form> </div>
	<p>Contact list</p>
	<span id=outputfirst_name>-----</span>
	<span id=outputLast_name>-----</span>
	<span id=outputphone_number>----</span>
	<span id=outputemail>----</span>
	<span id=outputaddress>---</span>


<script type="text/javascript" src="contact.js"></script>
</body>
</html> 