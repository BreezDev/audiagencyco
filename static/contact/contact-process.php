<?php

// define("WEBMASTER_EMAIL", 'admin@audiagency.co.site');
//$address = "example@themeforest.net";
$address = "admin@audiagency.co.site";
if (!defined("PHP_EOL")) define("PHP_EOL", "\r\n");

$error = false;
$fields = array('name', 'email', 'url', 'drop', 'message');

foreach ($fields as $field) {
	if (empty($_POST[$field]) || trim($_POST[$field]) == '')
		$error = true;
}

if (!$error) {

	$name = stripslashes($_POST['name']);
	$email = trim($_POST['email']);
	$url = stripslashes($_POST['url']);	
	$drop = stripslashes($_POST['drop']);
	$message = stripslashes($_POST['message']);

	$e_drop = 'You\'ve been contacted by ' . $name . '.';

	// Configuration option.
	// You can change this if you feel that you need to.
	// Developers, you may wish to add more fields to the form, in which case you must be sure to add them here.

	$e_body = "You have been contacted by: $name" . PHP_EOL . PHP_EOL;
	$e_reply = "E-mail: $email\r\nurl: $url" . PHP_EOL . PHP_EOL;
	$e_drop = "\r\ndrop: $drop";
	$e_content = "Message:\r\n$message" . PHP_EOL . PHP_EOL;

	$msg = wordwrap($e_body . $e_reply . $e_drop, 70);

	$headers = "From: $email" . PHP_EOL;
	$headers .= "Reply-To: $email" . PHP_EOL;
	$headers .= "MIME-Version: 1.0" . PHP_EOL;
	$headers .= "Content-type: text/plain; charset=utf-8" . PHP_EOL;
	$headers .= "Content-Transfer-Encoding: quoted-printable" . PHP_EOL;

	if (mail($address, $e_drop, $msg, $headers)) {

		// Email has sent successfully, echo a success page.

		echo 'Success';
	} else {

		echo 'ERROR!';
	}
}
