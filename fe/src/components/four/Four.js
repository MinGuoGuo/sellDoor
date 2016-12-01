import React, { Component } from 'react';
import ChildBtn from './child/Child.js';
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
        console.log(result);
        const data = [
            {
                test_age: 25,
                test_name:"小汉",
                test_phone: 2147483647,
                test_sex: "女",
                id: 2
            },
            {
                test_age: 25,
                test_id: 43,
                test_name:"小汉",
                test_phone: 2147483647,
                test_sex: "女",
                id: 3
            }
        ]
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
                                            <span onClick={this.delClick.bind(this, item.id)}>修改</span>
                                            <span>丨</span>
                                            <span>删除</span>
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
