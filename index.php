<!--
    Why index.php ?????
    
    no use of index.php in whole project
    just to deploy using heroku
    index.php file is there
    so that heroku thinks its a php project
    because
    only dynamic webiste can be uploaded on heroku
-->

<?php
    include_once("index.html");
    // or
    // header('Location: index.html');
?>