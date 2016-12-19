import React, { Component } from 'react';
import { BackTop, Popconfirm, message } from 'antd';

export default class Child extends Component {
    constructor (props) {
        super (props);
    }
    handleClick () {
        alert('返回顶部咯！')
    }
    confirmClick = () => {
        console.log('点击确认按钮发生的事件');
    }
    cancelClick = () => {
        console.log('点击取消按钮发生的事件');
    }
    render () {
        return (
            <div>
                <Popconfirm placement="bottomLeft" title="确认删除本条数据?" onConfirm={this.confirmClick} onCancel={this.cancelClick} okText="确认" cancelText="取消">
                    <a href="#">Delete</a>
                </Popconfirm>
                <div style={{width: 100, height: 1000, backgroundColor: 'red'}}></div>
                <BackTop />
            </div>
        )
    }
}
