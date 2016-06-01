<?php

function list_directories(){
  $list = scandir(".");
  arsort($list);

  foreach ($list as $item) {
    if(is_dir($item) && $item{0} != "." && $item{0} != "_"){
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
  echo "<li><span class='name'><a href='$path$file'>" . get_name($file) . "</a></span> <span class='ext'>" . get_ext($file) . "</span> <span class='modified'>" . $date . "</span></li>";
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

$supported = ['md', 'txt', 'html', 'pdf'];

function get_name($file){
  global $supported;
  foreach ($supported as $type) {
    if (contains($file, ".$type")) {
        return basename($file, ".$type");
    }
  }
}

function get_ext($file){
  global $supported;
  foreach ($supported as $type) {
    if (contains($file, ".$type")) {
        return $type;
    }
  }
}

function contains($outer, $inner){
  return strpos($outer, $inner) !== false;
}
?>
