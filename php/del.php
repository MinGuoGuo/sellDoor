<?php
header('Access-Control-Allow-Origin: *');

require_once('config.inc.php');
$id = json_decode($HTTP_RAW_POST_DATA)->id;
$id = trim($id);
try {
	$rs = $conn->exec('delete from test where test_id = '.$id);
	if($rs) {
		echo json_encode(['msg'=>'删除成功', 'code'=>$rs]);
	}
} catch (Exception $e) {
	echo json_encode(['msg'=>$e->getMessage(),'code'=>$e->getCode()]);
}