<?php

$con=mysqli_connect("127.0.0.1","root","","projectone");

$data=file_get_contents("../data/xiangxiangka1.json");
var_dump($data);

$arr=json_decode($data,true); 

foreach($arr as $x=>$x_value){

    // echo  $x,$x_value;
    // echo "<br>";
    $sql="INSERT INTO `xuanxiangka` (`h3_a`,`value` ) VALUES ('$x','$x_value')";

    mysqli_query($con,$sql);
}

?>