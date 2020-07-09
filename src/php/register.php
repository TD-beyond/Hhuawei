<?php
    header("content-type:text/html;charset=utf-8;");
    $name=$_POST['username'];
    $word=$_POST['password'];

    //连接数据库
    $link = mysqli_connect("127.0.0.1","root","root","music");
    $t=date("H");

    if ($name=="") {
    print_r("<script>alert('不能为空')</script>");
    exit;
    }
    //对比数据库，昵称不能重复
    $res = mysqli_query($link,"SELECT * FROM `user` WHERE `username`='$name'");
    if(mysqli_fetch_assoc($res)){
            print_r("<script>alert('昵称不能重复')</script>");
        }else{
             //添加数据
             $res1 = mysqli_query($link,"INSERT INTO `user` (`username`,`password`)  VALUES ('$name','$word')");
                //注册后
                if($res1){
                    print_r("<script>alert('注册成功')</script>");
                    print_r("<script>window.location.replace('../pages/index.html');</script>");
                }else{
                    print_r("<script>alert('注册失败！')</script>");
                }
        }
    
 
?>