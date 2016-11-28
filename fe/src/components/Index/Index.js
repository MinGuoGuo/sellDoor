import React, { Component } from 'react';
import { Input, Form, Button, Table, Icon, notification, Modal } from 'antd';
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
            modal2Visible: false
        }
    }
    componentDidMount = () => {
        this.getList();
    }
    //以下两个生命周期不要随便用
    // componentWillUpdate = () => {
    //     this.getList();
    // }
    // componentDidUpdate = () => {
    //     this.getList();
    // }
    getList = () => {
        fetch('http://127.0.0.1/sellDoor/php/list.php')
            .then( (response) => {
                console.log(response)
                return response.json()
            }).then((result)=>  {
                console.log(result);
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
    delClick = (id) => {
        fetch('http://127.0.0.1/sellDoor/php/del.php', {
            method: 'POST',
            headers: { 'Content-Type': 'text/plain' },
            body: JSON.stringify({id: id})
        }).then( (response) => {
            return response.json()
        }).then((result)=>  {
            notification.open({
                message: result.msg,
                description: '删除',
                icon: <Icon type="smile-o" style={{ color: '#2db7f5' }} />
            });
        }).catch((error) => {
             notification.open({
                message: '提示信息',
                description: '删除失败!',
                icon: <Icon type="frown-o" style={{ color: '#2db7f5' }} />
            });
        });
        this.getList();
        this.setState({ modal2Visible: false });
    }
    setModal2Visible = () => {
        this.setState({ modal2Visible: true });
    }
    cancelClick = () => {
        this.setState({ modal2Visible: false });
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
                    <a href="javascript:;" onClick={() => this.setModal2Visible()}>删除</a>
                    <Modal
                        width='300'
                        title="提示信息！"
                        wrapClassName="vertical-center-modal"
                        visible={this.state.modal2Visible}
                        onOk={ () => this.delClick(record.test_id)}
                        onCancel={this.cancelClick}
                    >
                        <div>
                            <Icon type="smile-o" />
                            是否删除本条数据？
                        </div>
                    </Modal>
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
                    <Table columns={columns} dataSource={this.state.data} />
                </div>
            </div>
        )
    }
}
