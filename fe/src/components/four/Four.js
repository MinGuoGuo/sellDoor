import React, { Component } from 'react';
import ChildBtn from './child/Child.js';
import { Link } from 'react-router';
import './four.css';
import 'whatwg-fetch';

export default class Four extends Component {
    constructor (props) {
        super(props);
        this.state = {
            data: [],
            pageNo: 1,
            count: 1,
            age: '',
            name: ''
        }
    }
    componentDidMount () {
        this.getList();
    }
    getList () {
        fetch('http://127.0.0.1/sellDoor/php/list.php', {
            method: 'POST',
            headers: {'Content-Type': 'text/plain'},
            body: JSON.stringify({page: this.state.pageNo, pagesize: 100, name: this.state.name, age: this.state.age})
        }).then( (response) => {
                return response.json();
            }).then((result)=>  {
                this.setState({
                    data: result.list,
                });
        }).catch((error) => {
            alert('请求失败');
        })
    }
    delClick (id) {
        console.log(id);
    }
    render () {
        let result = this.state.data;
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>序号</th>
                            <th>姓名</th>
                            <th>年龄</th>
                            <th>性别</th>
                            <th>电话</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            result.map((item, index) => {
                                return(
                                    <tr key={item.test_id}>
                                        <td>{index + 1}</td>
                                        <td>{item.test_name}</td>
                                        <td>{item.test_age}</td>
                                        <td>{item.test_sex}</td>
                                        <td>{item.test_phone}</td>
                                        <td>
                                            <span><Link to={{pathname: "modifyUser/" + item.test_id + "/" + item.test_name}}>修改</Link></span>
                                            <span>丨</span>
                                            <span onClick={this.delClick.bind(this, item.test_id)}>删除</span>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
