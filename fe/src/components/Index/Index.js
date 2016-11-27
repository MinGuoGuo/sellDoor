import React, { Component } from 'react';
import { Input, Form, Button, Table, Icon, notification } from 'antd';
import { Link } from 'react-router';
import 'whatwg-fetch';
import './Index.css';

//全局配置弹出框样式
notification.config({
    top: 100,
    duration: 5,
});

export default class Index extends Component {
    constructor (props) {
        super(props);
        this.state = {
            data: null
        }
    }
    componentDidMount = () => {
        fetch('http://127.0.0.1/sellDoor/php/list.php')
            .then( (response) => {
                return response.json()
            }).then((result)=>  {
                this.setState({
                    data: result
                })
        }).catch((error) => {
            notification.open({
                message: '提示信息',
                description: '服务器爆炸，请求失败!',
                icon: <Icon type="frown-o" style={{ color: '#2db7f5' }} />
            });
        })
    }
    delClick = (recordId) => {
        fetch('http://127.0.0.1/sellDoor/php/del.php', {
            method: 'POST',
            headers: { 'Content-Type': 'text/plain' },
            body: JSON.stringify({id: recordId})
        }).then( (response) => {
            return response.json()
        }).then((result)=>  {
            notification.open({
                message: result.msg,
                description: '删除',
                icon: <Icon type="smile-o" style={{ color: '#2db7f5' }} />,
            });
        }).catch((error) => {
            
        })
    }
    render () {
        const columns = [{
            title: '姓名',
            dataIndex: 'test_name',
            key: 'name',
            render: text => <a href="#">{text}</a>
        }, {
            title: '年龄',
            dataIndex: 'test_age',
            key: 'age'
        }, {
            title: '性别',
            dataIndex: 'test_sex',
            key: 'sex'
        }, {
            title: '电话',
            dataIndex: 'test_phone',
            key: 'tel'
        },{
            title: '操作',
            key: 'action',
            render: (text, record) => (
                <span>
                    <span href="javascript:;"><Link to={{pathname: "modifyUser/" + record.id +"/" + record.name, query: {name: record.name, age: record.age}}}>修改</Link></span>
                    <span className="ant-divider" />
                    <a href="javascript:;" onClick={() => {this.delClick(record.test_id)}}>删除</a>
                </span>
            )
        }];
        return (
            <div className="index">
                <div className="search">
                    姓名：<Input size="large" style={{width: 160, marginRight: 40}} placeholder="姓名"/>
                    年龄：<Input size="large" style={{width: 160, marginRight: 40}} placeholder="年龄"/>
                    <Button type="primary" size="large">搜索</Button>
                    <div style={{marginTop: 20}}>
                        <Button type="primary" size="large"><Link to="/addUser">新建</Link></Button>
                    </div>
                </div>
                <div className="table">
                    <Table columns={columns} dataSource={this.state.data} rowKey={record => record.test_id} />
                </div>
            </div>
        )
    }
}
