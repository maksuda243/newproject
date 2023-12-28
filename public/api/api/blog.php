<?php
include 'connection.php';
$blog = [];

$sql = 'SELECT *,concat("http://localhost/reactcrud/api/",blog.image) as image FROM `blog`';
$result=$db->query($sql);
while($row = $result->fetch_object()){
	$blog[]= $row;
}
	echo json_encode($blog);