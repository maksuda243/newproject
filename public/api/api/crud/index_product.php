<?php
include '../connection.php';
$data = [];

$sql = 'SELECT products.*, brand.name as bname, categories.name as cname, CONCAT("http://localhost/reactcrud/api/",products.image) as image FROM `products`
join brand on brand.id=products.brand_id
join categories on categories.id=products.category_id order by products.id DESC';
$result=$db->query($sql);
if($result->num_rows > 0){
	while($row = $result->fetch_object()){
		$data[]= $row;
	}
	echo json_encode(array("status" => 1,"data"=>$data));
}else{
	echo json_encode(array("status" => 0,"data"=>""));
}
	
