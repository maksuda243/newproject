<?php
include 'connection.php';
$blog = [];
$id=$_GET['id'];
$sql = 'SELECT *,concat("http://localhost/reactcrud/api/",blog.image) as image FROM `blog`where id='.$id.'';
$result=$db->query($sql);
while($row = $result->fetch_object()){
	$blog= $row;
}
echo json_encode($blog);