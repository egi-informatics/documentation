<link rel="stylesheet" href="_markdown/markdown.css">

<div class="content">
  <?php
  require_once '_markdown/Parsedown.php';
  $parsedown = new Parsedown();
  $path = $_GET['name'];
  $text = file_get_contents($path);
  echo $parsedown->text($text);
  ?>
</div>
