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
  $name = get_name($file);
  $ext = get_ext($file);
  if($ext == "md"){
    echo "<li><span class='name'><div value='$path$file' class='md-link'>$name</div></span> <span class='modified'>$date</span> <span class='ext'>$ext</span></li>";
  } else{
    echo "<li><span class='name'><a href='$path$file'>$name</a></span> <span class='modified'>$date</span> <span class='ext'>$ext</span></li>";
  }
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
