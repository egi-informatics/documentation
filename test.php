<?php

$supported = ['.md', '.txt', '.html', '.pdf'];

function get_extension($name){
  global $supported;
  foreach ($supported as $type){
    if(contains($name, $type)){
      return $type;
    }
  }
}

function contains($outer, $inner){
  return strpos($outer, $inner) !== false;
}

echo get_extension("spencer.txt");

 ?>
