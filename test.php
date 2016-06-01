<?php

$list = scandir(".");

foreach ($list as $item) {
  if(is_dir($item) && $item{0} != "."){
    echo "<li>$item</li>";
  }
}

 ?>
