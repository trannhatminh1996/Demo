<?php
    /*if (isset($_GET['phpString']))
    {
        $a = $_GET['phpString'];
        echo strrev($a);
    }
    */
    if (isset($_POST['phpString'],$_POST['name']))
    {
        $name= $_POST['name'];
        $string = $_POST['phpString'];
        
        echo $name, ' says ',$string;
    }
?>