<?php 
$errors = '';
$myemail = 'sarah@sassafrasbiz.com';//<-----Put Your email address here.
if(empty($_POST['name'])  || 
   empty($_POST['email']) || 
   empty($_POST['message']))
{
    $errors .= "\n All fields are required. Please fill out all fields. \n";
}

$name = $_POST['name']; 
$email_address = $_POST['email']; 
$message = $_POST['message']; 

if (!preg_match(
"/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i", 
$email_address))
{
    $errors .= "\n Please make sure you have entered a valid email address.\n \n";
}

if( empty($errors))
{
	$to = $myemail; 
	$email_subject = "Contact form submission: $name";
	$email_body = "You have received a new message. ".
	" Here are the details:\n Name: $name \n Email: $email_address \n Message \n $message"; 
	
	$headers = "From: $email_address\n"; 
	$headers .= "Reply-To: $email_address";
	
	mail($to,$email_subject,$email_body,$headers);
	
	mail($to,$email_subject,$email_body);

	//redirect to the 'thank you' page
	header('Location: /thank-you.html');
} 
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"> 
<html>
<head>
	<title>Contact form handler</title>
	<link rel="stylesheet" href="/css/styles.css">
	<style>
body {
    background-color: white  ;
    padding-left: 3rem;
    padding-top: 3rem;
    color: black;
    font-size:1.5rem;
}

button {
background-color: rgb(31,178,111);
color: white;
font-size; 2rem;
padding: 10px;
border: none;
border-radius: 5px;
margin-top; 2rem;
}

img {
display: block;
width: 80%;
margin: 1rem auto;
}


</style>
</head>

<body>

<img src="/images/SBSLogo.svg" /> 
<!-- This page is displayed only if there is some error -->
<?php
echo nl2br($errors);
?>

<br>

<button onclick="goBack()">Go Back</button>

<script>
function goBack() {
    window.history.back();
}
</script>





</body>
</html>