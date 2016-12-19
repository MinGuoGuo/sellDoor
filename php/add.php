<?php
header('Access-Control-Allow-Origin: *');

require_once('config.inc.php');
$data = json_decode($HTTP_RAW_POST_DATA);
// $rs = $conn->query('select * from test')->fetchAll(PDO::FETCH_ASSOC);
try {
	$rs = $conn->exec('insert into test(test_name,test_age,test_sex,test_phone) values("'.$data->name.'","'.$data->age.'","'.$data->sex.'","'.$data->tel.'")');
	if($rs) {
		echo json_encode(['msg'=>'添加成功', 'code'=>1, 'id'=>$conn->lastInsertId()]);
	}
} catch (Exception $e) {
	echo json_encode(['msg'=>$e->getMessage(),'code'=>$e->getCode()]);
}
