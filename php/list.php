<?php
header('Access-Control-Allow-Origin: *');

require_once('config.inc.php');

// 页码
// $page = $_POST['page'];
$page = 1;
// 每页条数
// $pagesize = $_POST['pagesize'];
$pagesize = 2;
$startrow = ($page - 1)*$pagesize;
// 查询条件
$where = '1=1';

$sqlList = 'select * from test where '.$where.' order by test_id desc limit '.$startrow.','.$pagesize;
$sqlCount = 'select count(1) as total from test where '.$where;

try {
	$list = $conn->query($sqlList)->fetchAll(PDO::FETCH_ASSOC);
	$count = $conn->query($sqlCount)->fetchAll(PDO::FETCH_ASSOC);
	$result['list']		= $list;
	$result['count']	= $count[0]['total'];
	$result['totalpage']= (int)ceil($pagesize/$result['count']);
	if($result) {
		echo json_encode($result);
		die;
	}
} catch (Exception $e) {
	echo json_encode(['msg'=>$e->getMessage(),'code'=>$e->getCode()]);
	exit();
}