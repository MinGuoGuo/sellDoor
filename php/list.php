<?php
header('Access-Control-Allow-Origin: *');

require_once('config.inc.php');
$postdata = json_decode($HTTP_RAW_POST_DATA,true);
// 页码
$page = $postdata['page'];
// 每页条数
$pagesize = $postdata['pagesize'];
$startrow = ($page - 1)*$pagesize;
// 查询条件
$where = '1=1';
$name = isset($postdata['name'])?$postdata['name']:'';
$age = isset($postdata['age'])?$postdata['age']:0;

if(!empty($name)) $where .= ' and test_name like "%'.$name.'%"';
if(!empty($age)) $where .= ' and test_age = '.$age;

$sqlList = 'select * from test where '.$where.' order by test_id desc limit '.$startrow.','.$pagesize;
$sqlCount = 'select count(1) as total from test where '.$where;

try {
	$list = $conn->query($sqlList)->fetchAll(PDO::FETCH_ASSOC);
	$count = $conn->query($sqlCount)->fetchAll(PDO::FETCH_ASSOC);
	$result['list']		= $list;
	$result['count']	= $count[0]['total'];
	$result['totalpage']= (int)ceil($result['count']/$pagesize);
	if($result) {
		echo json_encode($result);
		die;
	}
} catch (Exception $e) {
	echo json_encode(['msg'=>$e->getMessage(),'code'=>$e->getCode()]);
	exit();
}