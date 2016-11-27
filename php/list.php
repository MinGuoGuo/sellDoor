<?php
header('Access-Control-Allow-Origin: *');

require_once('config.inc.php');
// $rs = $conn->query('select * from test')->fetchAll(PDO::FETCH_ASSOC);
try {
	$rs = $conn->query('select * from test order by test_id desc')->fetchAll(PDO::FETCH_ASSOC);
	if($rs) {
		echo json_encode($rs);
	}
} catch (Exception $e) {
	echo json_encode(['msg'=>$e->getMessage(),'code'=>$e->getCode()]);
}