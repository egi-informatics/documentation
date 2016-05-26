<!DOCTYPE html>
<?php include("functions.php") ?>
<html>
  <head>
    <meta charset="utf-8">
    <title>egi docs</title>
    <link rel="stylesheet" href="style.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
  </head>
  <body>
    <h1 id="title">Documentation</h1>
    <form action="index.php" method="post">
      <?php
      if(!isset($_POST['password']) || $_POST['password'] != "EGI.slc423"){
        echo "<input id='pass' type='password' name='password' placeholder='Password'>";
        echo "<input type='submit'>";
        exit();
      }
      ?>
    </form>

    <h3>iPad</h3>
    <ul> <?php writeAll('ipad/'); ?> </ul>
    <h3>Website</h3>
    <ul> <?php writeAll('website/'); ?> </ul>
    <h3>Newsletter</h3>
    <ul> <?php writeAll('newsletter/'); ?> </ul>
    <footer></footer>
  </body>
</html>
