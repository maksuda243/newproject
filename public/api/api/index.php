<?php
include 'connection.php';
$Shop = [];

$sql = "SELECT * FROM shop";
$result=$db->query($sql);
while($row = $result->fetch_object()){
	$Shop[]= $row;
}
	echo json_encode($Shop);