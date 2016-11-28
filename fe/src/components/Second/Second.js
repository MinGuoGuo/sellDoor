import React, { Component } from 'react';
import { Button, Spin, Alert } from 'antd';


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
            </div>
        )
    }
}
