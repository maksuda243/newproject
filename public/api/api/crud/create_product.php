<?php
include '../connection.php';
$data = json_decode(file_get_contents("php://input"));

if($data){
    if($data->id){
        $sql="update products set "; // start query
    }else{
        $sql="insert into products set "; // start query
    }
    
    foreach($data as $k=>$v){
        if($k=="image" && $v !=""){
            $dir="../assets/img/product/";
            $dir2="assets/img/product/";
            list($type, $imgdata) = explode(';', $data->image);
            list(, $imgdata)      = explode(',', $imgdata);
            /* to get image type like jpg, png */
            $fileType = explode("image/", $type);
            $image_type = $fileType[1];
            
            $imgdata = base64_decode($imgdata);
            $image_name = uniqid().rand(111,999) .".". $image_type;
            file_put_contents($dir.$image_name, $imgdata);
            $img=$dir2.$image_name;
            $sql.= "image='$img',"; // get data and set query
        }else{
            $sql.= "$k='$v',"; // get data and set query
        }
    }
    $sql=rtrim($sql,","); // remove last , from query
    if($data->id){
        $sql.=" where id= '".$data->id."' "; // start query
    }
	$result=$db->query($sql);
	if($result)
        echo json_encode(array("status" => 1));
    else
		echo json_encode(array("status" => 0));
	
}

