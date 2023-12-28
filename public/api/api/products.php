<?php
include 'connection.php';
$data = [];

$sql = 'SELECT products.*, brand.name as bname, categories.name as cname, CONCAT("http://localhost/reactcrud/api/",products.image) as image FROM `products`
join brand on brand.id=products.brand_id
join categories on categories.id=products.category_id';
$result=$db->query($sql);
while($row = $result->fetch_object()){
	$data[]= $row;
}
echo json_encode($data);