<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>用户1</title>
	<style type="text/css">
		.message {
			background: #f90;
			color:#f00;
			width: 50vw;
			height: 50vh;
			margin: 5vh auto;
		}
		.message .span-l{
			text-align: left;
			color: #fff;
			padding: 5px;
		}
		.message .span-r{
			text-align: right;
			color: #fff;
			padding: 5px;
		}
		.message .span-l span{
			background: #090;
		}
		.message .span-r span{
			background: #03a;
		}
		.button-group {
			width: 25vw;
			height: 5vh;
			margin: 5vh auto;
		}
	</style>
	<script>
		function showMsg(args) {
			var divDom = document.createElement('div');
			divDom.setAttribute('class', 'span-r');
			var spanDom = document.createElement('span');
			spanDom.innerHTML = '内容: '+args.chat_content;
			divDom.appendChild(spanDom);
			document.getElementsByClassName('message')[0].appendChild(divDom);
		}
	</script>
</head>
<body>
	<iframe src="chat_server.php" style="display:none;"></iframe>
	<div class="button-group">
		<input type="text" />
		<input type="button" value="发送" />
	</div>
	<div class="message">
		<div class="span-l"><span>1</span></div>
		<div class="span-r"><span>2</span></div>
	</div>
</body>
</html>