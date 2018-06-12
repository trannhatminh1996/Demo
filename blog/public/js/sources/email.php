<?php
    if (isset($_POST['email']))
    {
        $email = $_POST['email'];
        if (!empty($email)){
            if (filter_var($email,FILTER_VALIDATE_EMAIL)===false)
            {
                echo 'That isn\'t a valid email';
            }
            else 
            {
                echo 'Valid email';
            }
        }
    }
?>