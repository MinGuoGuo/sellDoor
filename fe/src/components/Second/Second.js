import React, { Component } from 'react';
import { Button, Spin, Alert, Input } from 'antd';
import {  Link } from 'react-router';
import Table from '../Third/Content/Content.js';


export default class Second extends Component {
	constructor (props) {
		super(props)
		this.state = {
			loading: false
		}
	}
	showClick = () => {
		this.setState({ loading: true });

	}
	cancelClick =() => {
		this.setState({ loading: false });
	}
    render () {
        return (
            <div>
                <Spin spinning={this.state.loading} size="large" tip="提交中">
                	 <h1>我是第二个页面，嘿嘿！</h1>
	                <Button type="primary" style={{marginBottom: 20}} onClick={this.showClick}>点击弹出loading层</Button>
                </Spin>
                <Button type="primary" onClick={this.cancelClick}>点击消除loading层</Button>
                <div className="search" style={{ margin: '20px 0' }}>
                    姓名：<Input size="large" style={{width: 160, marginRight: 40}} placeholder="姓名"/>
                    年龄：<Input size="large" style={{width: 160, marginRight: 40}} placeholder="年龄"/>
                    <Button type="primary" size="large">搜索</Button>
                    <div style={{marginTop: 20}}>
                        <Button type="primary" size="large"><Link to="/addUser">新建</Link></Button>
                    </div>
                </div>
                <div>
                	<Table />
                </div>
            </div>
        )
    }
}
