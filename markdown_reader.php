<?php

require_once '_markdown/Parsedown.php';

$parsedown = new Parsedown();

$text = file_get_contents($_GET['path']);
// $text = file_get_contents("iPad/Promo App Installation.txt");

echo $parsedown->text($text);

 ?>
