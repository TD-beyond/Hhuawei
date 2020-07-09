<?php 
    header("content-type:text/html;charset=utf-8;");
    $link = mysqli_connect("localhost","root","root","shop");
    $res = mysqli_query($link,"SELECT * FROM `cats` ");
    // $arr = mysqli_fetch_all($res);
    $arr = mysqli_fetch_assoc($res);
    $json = json_encode($arr);
    print_r($json);
?>