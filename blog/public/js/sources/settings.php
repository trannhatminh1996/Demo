<?php
    include 'init.php';

    if (isset($_POST['name']))
    {
        $name = mysql_real_escape_string(htmlentities($_POST['name']));
        $update = mysql_query("UPDATE user SET name='$name' Where id=".$_SESSION['user_id']);

        if ($update===true){
            echo 'Setings have been updated.';

        }else if ($update===true){
            echo 'There was an error';
        }

    }
?>