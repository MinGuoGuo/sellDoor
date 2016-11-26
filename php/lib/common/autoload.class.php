<?php
/**
 * autoload.class.php 自动加载类
 *
 * 只自动加载lib下的业务类、common下的常用类以及table层的类。
 *
 */
class Autoload {
	protected static $path = array(
		'lib_path' => LIB_PATH,
		'common_path' => COMMON_PATH
		);
	/**
	 * Autoload::autoload()
	 * 
	 * @return 
	 */
	public static function loading($classname) {

        $classname = strtolower($classname);
		$filename = $classname.".class.php";

		foreach (self::$path as $filePath) {
			$file = $filePath.$filename;
			if(file_exists($file) && is_file($file)) {
	        	require_once($file);
	            break;
	        }
		}
    }
}