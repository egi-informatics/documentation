<link rel="stylesheet" href="_markdown/markdown.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>

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

<script>

// Hides empty table headers
var th = document.getElementsByTagName('th');

for(var i = 0; i < th.length; i++){
  if(th[i].innerHTML.length == 0){
    th[i].style.display = "none";
  }
}

</script>
