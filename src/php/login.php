<?php
    $name = $_POST['username'];
    $word = $_POST['password'];
    $link = mysqli_connect("127.0.0.1","root","root","music");
    $res = mysqli_query($link,"SELECT * FROM `user` WHERE `username`='$name' AND `password`='$word'");
    if(mysqli_fetch_all($res)){
         $arr = array('code'=>1);
         $json = json_encode($arr);
         echo $json;
         setcookie("username",$name,time()+7*24*60*60);
         setcookie("password",$word,time()+7*24*60*60);
        }else{
            $arr = array('code'=>0);
            $json = json_encode($arr);
            echo $json;
            } 
?>