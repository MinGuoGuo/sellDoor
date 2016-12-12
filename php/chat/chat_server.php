<?php

require_once('../config.inc.php');

set_time_limit(0);
ob_start();
echo str_repeat('', 4096);
ob_end_flush();
ob_flush();

while (1) {
	$oneInfo = $conn->query('select chat_id, chat_fromuserid,chat_touserid,chat_content from chat where chat_newmsg = 1 limit 1')->fetchAll(PDO::FETCH_ASSOC);
	if($oneInfo[0]) {
		echo '<script>
				parent.showMsg('.json_encode($oneInfo[0]).');
		  </script>';
		$conn->exec('update chat set chat_newmsg = 0 where chat_id = '.$oneInfo[0]['chat_id']);
	} 
	ob_flush();
	flush();
	usleep(500000);
}
?>