import React, { Component } from 'react';
import { Input, Button, Select, Icon } from 'antd';
import './AddUser.css';
import 'whatwg-fetch';

const Option = Select.Option;

export default class AddUser extends Component {
    constructor (props) {
        super(props);
        this.state = {
            name: '',
            age: '',
            tel: '',
            sex: ''
        };
    }
    handleClick = () => {
        window.history.go(-1);
    }
    showValue = (value) => {
        this.setState({
            sex: `${value}`
        });
    }
    getValue = (e) => {
        let type = e.target.getAttribute('data-type');
        switch(type) {
            case 'name':
                this.setState({
                    name: e.target.value
                });
                break;
            case 'age':
                this.setState({
                    age: e.target.value
                });
                break;
            case 'tel':
                this.setState({
                    tel: e.target.value
                });
                break;
            default :
                break;
        }

    }
    submitClick = () => {
        fetch('http://127.0.0.1/sellDoor/php/add.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'text/plain'
            },
            body: JSON.stringify(this.state)
        }).then(function(response) {
            return response.json();
        }).then(function(result) {
            console.log(result)
        }).catch(function(error) {
            console.log('request failed', error)
        })
    }
    render () {
        return (
            <div className="adduser">
                <div style={{ margin: '10px auto', width: 240 }}>
                    <label>姓名：</label>
                    <Input style={{ width: 200 }} onChange={this.getValue} data-type='name' placeholder="姓名" />
                    <label>年龄：</label>
                    <Input style={{ width: 200 }} onChange={this.getValue} data-type='age' maxLength="2" placeholder="年龄" />
                    <label>性别：</label>
                    <Select showSearch default='' style={{ width: 200 }} placeholder="搜索..." optionFilterProp="children" onChange={ this.showValue } notFoundContent="">
                        <Option value="男">男</Option>
                        <Option value="女">女</Option>
                    </Select>
                    <label>电话：</label>
                    <Input style={{ width: 200 }} onChange={this.getValue} data-type='tel' maxLength="11" placeholder="电话" />
                </div>
                <div style={{ textAlign: 'center' }}>
                    <Button className="submitBtn" onClick={this.submitClick}>提交</Button>
                    <Button type="primary" onClick={this.handleClick}>返回</Button>
                </div>
            </div>
        )
    }
}
