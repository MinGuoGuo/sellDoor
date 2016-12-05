import React, {Component} from 'react';
import {Link} from 'react-router';
import {Table, notification, Icon} from 'antd';
import 'whatwg-fetch';
import PageList from './Pagination.js';

//全局配置弹出框样式
notification.config({
    top: 100,
    duration: 5,
});

export default class TableContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            pageNo: 1,
            loading: false,
            name: this.props.name,
            age: this.props.age,
            count: 1

        }
    }

    componentDidMount() {
        this.getUserList('', '');
    }

    componentWillReceiveProps(nextProps) {
        this.getUserList(nextProps.name, nextProps.age);
    }

    getUserList(name, age) {
        let {name, age} = this.props;

        this.setState({loading: true});
        fetch('http://127.0.0.1/sellDoor/php/list.php', {
            method: 'POST',
            headers: {'Content-Type': 'text/plain'},
            body: JSON.stringify({page: this.state.pageNo, pagesize: 5, name: name, age: age})
        }).then((response) => {
            return response.json();
        }).then((result)=> {
            this.setState({
                data: result.list,
                loading: false,
                count: result.count
            });
        }).catch((error) => {
            this.setState({loading: false})
            notification.open({
                message: '提示信息',
                description: '服务器爆炸，请求失败!',
                icon: <Icon type="frown-o" style={{color: '#2db7f5'}}/>
            });
        })
    }

    getPage(newPage) {
        this.setState({pageNo: newPage});
        setTimeout(() => {
            this.getUserList();
        }, 50)
    }

    render() {
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
        }, {
            title: '操作',
            key: 'action',
            render: (text, record) => (
                <span>
                    <span href="javascript:;"><Link
                        to={{pathname: "modifyUser/" + record.id + "/" + record.name}}>修改</Link></span>
                    <span className="ant-divider"/>
                    <a href="javascript:;" onClick={() => this.setModal2Visible()}>删除</a>
                </span>
            )
        }];
        return (
            <div>
                <Table columns={columns} dataSource={this.state.data} loading={this.state.loading} pagination={false}/>
                <PageList getNewPage={this.getPage.bind(this)} page={this.state.pageNo} count={this.state.count}/>
            </div>
        )
    }
}
