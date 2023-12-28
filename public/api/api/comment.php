<?php
include 'connection.php';
$data = [];
$blog_id=$_GET['blog_id'];
$sql = "SELECT * FROM comments where blog_id=$blog_id, name=$name, email=$email";
$result=$db->query($sql);
while($row = $result->fetch_object()){
	$data[]= $row;
}
	echo json_encode($data);