import React, {Component} from 'react';
import {Link} from 'react-router';
import {Button, Input} from 'antd';

export default class Search extends Component {
    constructor(props) {
        super(props);
    }

    getValue() {
        let name = this.refs.name.value;
        let age = this.refs.age.value;
        let obj = {};
        obj.name = name;
        obj.age = age;
        this.props.search(obj);
    }

    render() {
        console.log('search', this.props.search);
        return (
            <div className="">
                姓名：<input size="large" ref="name"style={{width: 160, marginRight: 40}} placeholder="姓名"/>
                年龄：<input size="large" ref="age" style={{width: 160, marginRight: 40}} placeholder="年龄"/>
                <Button type="primary" size="large" onClick={this.getValue.bind(this)}>搜索</Button>
                <div style={{marginTop: 20}}>
                    <Button type="primary" size="large"><Link to="/addUser">新建</Link></Button>
                </div>
            </div>
        )
    }
}
