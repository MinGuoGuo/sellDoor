import React, { Component } from 'react';
import { Button } from 'antd';
import './AddUser.css';

export default class AddUser extends Component {
    constructor (props) {
        super(props)
    }
    handleClick = () => {
        window.history.go(-1);
    }
    render () {
        return (
            <div className="adduser">
                <h1>我是新建页面</h1>
                <div>
                    <Button type="primary" onClick={this.handleClick}>返回</Button>
                </div>
            </div>
        )
    }
}
