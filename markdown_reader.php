<?php

require_once '_markdown/Parsedown.php';

$parsedown = new Parsedown();
$path = $_POST['path'];

$text = file_get_contents($_POST['path']);

echo $parsedown->text($text);

 ?>

 <link rel="stylesheet" href="style.css">
