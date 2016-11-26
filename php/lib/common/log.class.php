<?php

class Log {
	const LOG    = 'log';
    const ERROR  = 'error';
    const INFO   = 'info';
    const SQL    = 'sql';
    const NOTICE = 'notice';
    const ALERT  = 'alert';

    // 日志信息
    protected static $log = [];
    // 配置参数
    protected static $config = [];
    // 日志类型
    protected static $type = ['log', 'error', 'info', 'sql', 'notice', 'alert'];
    // 日志写入驱动
    protected static $driver;
    // 当前日志授权key
    protected static $key;
	
	/**
     * 日志初始化
     * @param array $config
     */
    public static function init($config = []) {

        $type         = isset($config['type']) ? $config['type'] : 'File';
        $class        = false !== strpos($type, '\\') ? $type : '\\think\\log\\driver\\' . ucwords($type);
        self::$config = $config;
        unset($config['type']);
        if (class_exists($class)) {
            self::$driver = new $class($config);
        } else {
            throw new Exception('class not exists:' . $class, $class);
        }
        // 记录初始化信息
        Log::record('[ LOG ] INIT ' . $type, 'info');
    }
    /**
     * 记录调试信息
     * @param mixed  $msg  调试信息
     * @param string $type 信息类型
     * @return void
     */
    public static function record($msg, $type = 'log') {
        self::$log[$type][] = $msg;
    }
}