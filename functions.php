<?php

function list_directories(){
  $list = scandir(".");

  foreach ($list as $item) {
    if(is_dir($item) && $item{0} != "."){
      echo "<h3>$item</h3>";
      echo "<ul>";
      writeAll($item . "/");
      echo "</ul>";
    }
  }
}

function write($path, $file){
  # $format = "F d, Y H:i:s";
  $format = "F d, Y";
  $date = date($format, filemtime($path . $file));
  echo "<li><span class='name'><a href='$path$file'>" . getName($file) . "</a></span> <span class='ext'>" . getExt($file) . "</span> <span class='modified'>" . $date . "</span></li>";
}

function writeAll($path){
  $filenames = array_slice(scandir($path), 2);
  $files = scandir($path);

  foreach ($filenames as $file) {
    if($file == ".DS_Store"){
      continue;
    }
    write($path, $file);
  }
}

function getName($file){
  if (strpos($file, '.txt') !== false) {
      return basename($file, ".txt");
  }
  if (strpos($file, '.html') !== false) {
      return basename($file, ".html");
  }
  if (strpos($file, '.pdf') !== false) {
      return basename($file, ".pdf");
  }
  if (strpos($file, '.png') !== false) {
      return basename($file, ".png");
  }
  if (strpos($file, '.rtf') !== false) {
      return basename($file, ".rtf");
  }
}

function getExt($file){
  if(strpos($file, '.txt') !== false){
    return "txt";
  }
  if(strpos($file, '.html') !== false){
    return "html";
  }
  if(strpos($file, '.pdf') !== false){
    return "pdf";
  }
  if(strpos($file, '.png') !== false){
    return "png";
  }
  if(strpos($file, '.rtf') !== false){
    return "rtf";
  }
}
?>
