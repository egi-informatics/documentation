<link rel="stylesheet" href="_markdown/markdown.css">

<div class="content">
  <?php
  function contains($outer, $inner){
    return strpos($outer, $inner) !== false;
  }

  require_once '_markdown/Parsedown.php';
  $parsedown = new Parsedown();
  $path = $_GET['name'];

  if(!contains($path, ".md")){
    echo $parsedown->text("##Not supported");
    exit();
  }

  $text = file_get_contents($path);
  echo $parsedown->text($text);

  $format = "F d, Y H:i:s";
  // $format = "F d, Y";
  $date = date($format, filemtime($path));
  echo "<div class='date'>$date</div>";
  ?>
</div>
