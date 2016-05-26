<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>egi docs</title>
    <link rel="stylesheet" href="style.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
  </head>
  <body>
    <h1 id="title">Documentation</h1>
    <h3>iPad</h3>
    <ul>
      <?php
      $path    = 'ipad/';
      $filenames = array_slice(scandir($path), 2);
      $files = scandir($path);

      foreach ($filenames as $file) {
        $date = date("F d Y H:i:s", filemtime($path . $file));
        echo "<li><a href='$path$file'>" . basename($file, ".txt") . "</a><span class='modified'>" . $date . "</span></li>";
      }
      ?>
    </ul>
    <h3>Website</h3>
    <ul>
      <?php
      $path    = 'website/';
      $filenames = array_slice(scandir($path), 2);
      $files = scandir($path);

      foreach ($filenames as $file) {
        $date = date("F d Y H:i:s", filemtime($path . $file));
        echo "<li><a href='$path$file'>" . basename($file, ".txt") . "</a><span class='modified'>" . $date . "</span></li>";
      }
      ?>
    </ul>
    <footer></footer>
  </body>
</html>
