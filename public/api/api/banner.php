<?php
include 'connection.php';
$banner = [];

$sql = "SELECT * FROM banner";
$result=$db->query($sql);
while($row = $result->fetch_object()){
	$banner[]= $row;
}
	echo json_encode($banner);