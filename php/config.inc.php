<?php

//基础设置=================================================
//error_reporting(0);                          //网站开发时，务必关闭此项；网站上线时，务必打开此项。
header("content-type:text/html;charset=utf-8");
//date_default_timezone_set('PRC');            //时区设置，服务器放置在国外的需要打开此项
session_start();
//ob_start();
define("PROJECTCODE", 'UIBE');            //项目编号，建议修改，每个项目应该不同

//路径定义=================================================
define('FILE_PATH', str_replace('\\','/',dirname(__FILE__)).'/'); //网站根目录路径
define('LIB_PATH', FILE_PATH.'lib/');
define('COMMON_PATH', FILE_PATH.'lib/common/');

// $HTTP_PATH = 'http://localhost/website/';              //网站访问路径，根据实际情况修改

//数据库连接参数设置=======================================
$config = array(
	'type'		=> 'mysql',// 数据库类型
	'hostname'	=> '127.0.0.1',// 服务器地址
	'database'	=> 'mysql_ldx',// 数据库名
	'username'	=> 'root',// 用户名
	'password'	=> 'root',// 密码
	'hostport'	=> '3306',// 端口
	'dsn'		=> '',// 连接dsn
	'charset'	=> 'utf8',// 数据库编码默认采用utf8
	'prefix'	=> 'test_',// 数据库表前缀
	'debug'		=> true,// 数据库调试模式
	);
//日志文件路径==============================================
//请给以下日志文件设置写权限
$LOG_PATH   = FILE_PATH.'logs/';
$LOG_config = array(
	'common'      => $LOG_PATH.'common.log',
	'debug'       => $LOG_PATH.'debug.log'
);

// SMTP配置
$mysmtp_server      = 'mail.uibe.edu.cn';
$mysmtp_port        = 25;
$mysmtp_auth        = true;
$mysmtp_account     = 'iss';
$mysmtp_pass        = 'wuzhouzhihui12345678';
$mysmtp_mailfrom    = 'iss@uibe.edu.cn';

// 初始化
require_once(COMMON_PATH.'autoload.class.php');
spl_autoload_register('Autoload::loading');


// 数据设置
$pdo = new PdoMysql($config);
$conn = $pdo->connect();
// $pdo->select('select* from test');