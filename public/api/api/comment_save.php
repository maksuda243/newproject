<?php
include 'connection.php';
$com = json_decode(file_get_contents('php://input'));
// print_r($com);
if($com){
    $blog_id=$_GET['blog_id'];
    $sql = "INSERT INTO comments SET blog_id=$blog_id, name= '$com->name', email ='$com->email',
                comment ='$com->comment', created_at=now()";
    $query=$db->query($sql);
    if($query) {
        $data = ['status' => 1, 'message' => "Record successfully created"];
    } else {
        $data = ['status' => 0, 'message' => "Failed to create record."];
    }
}
echo json_encode($data);
