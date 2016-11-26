/*jshint esversion: 6 */
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
            data: null,
        }
    }
    componentDidMount = () => {
        console.log(1);
       /* $.ajax({
            url: '/src/mock/list.json',
            contentType: 'application/json',
            dataType: 'json',
            success: (result) => {
                //console.log(result.result);
                this.setState({
                    data: result.result
                })

            },
            error: function () {
                alert('请求失败！')
            }
        });*/
        fetch('/src/mock/list.json')
            .then((response) => {
                console.log(response);
                return response.json()
            }).then((result)=>  {
                console.log(result);
                this.setState({
                    data: result.result
                })
        }).catch((error) => {
            notification.open({
                message: '提示信息',
                description: '服务器爆炸，请求失败!',
                icon: <Icon type="frown-o" style={{ color: '#2db7f5' }} />
            });
        })

    }
    delClick = (x) => {
        //alert(1);
        console.log(x);
    }
    render () {
        const columns = [{
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
            //render: text => <a href="#">{text}</a>
        }, {
            title: '年龄',
            dataIndex: 'age',
            key: 'age'
        }, {
            title: '性别',
            dataIndex: 'sex',
            key: 'sex'
        }, {
            title: '电话',
            dataIndex: 'tel',
            key: 'tel'
        },{
            title: '操作',
            key: 'action',
            render: (text, record) => (
                <span>
                    <a href="javascript:;"><Link to={{pathname: "modifyUser/" + record.id +"/" + record.name, query: {name: record.name, age: record.age}}}>修改</Link></a>
                    <span className="ant-divider" />
                    <a href="javascript:;" onClick={() => {this.delClick(record.id)}}>删除</a>
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
                    <Table columns={columns} dataSource={this.state.data} rowKey={record => record.id} />
                </div>
            </div>
        )
    }
}
