import React, { Component } from 'react';
import { Link } from 'react-router';
import { Button, Input } from 'antd';

export default class Search extends Component {
	render () {
		return (
			<div className="">
				姓名：<Input size="large" style={{width: 160, marginRight: 40}} placeholder="姓名"/>
                年龄：<Input size="large" style={{width: 160, marginRight: 40}} placeholder="年龄"/>
                <Button type="primary" size="large">搜索</Button>
                <div style={{marginTop: 20}}>
                    <Button type="primary" size="large"><Link to="/addUser">新建</Link></Button>
                </div>
			</div>
		)
	}
}