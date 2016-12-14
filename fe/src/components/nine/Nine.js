import React, { Component } from 'react';
import $ from 'jquery';
import 'whatwg-fetch';

export default class Nine extends Component {
    constructor (props) {
        super (props);
    }
    handleClick () {
        console.log(111);
        $.ajax({
            url : '/src/mock/list.json',
            type: 'get',
            dataType: 'json',
            success: function (data) {
                console.log(data);
            }
        });
        // fetch('/src/mock/list.json', {
        //     method: 'get',
        //     headers: {'Content-Type': 'text/plain'},
        //     // body: JSON.stringify({page: this.state.pageNo, pagesize: 5, name: this.state.name, age: this.state.age})
        // }).then( (response) => {
        //         return response.json();
        //     }).then((result)=>  {
        //         alert('数据加载成功');
        //         console.log(result);
        // }).catch((error) => {
        //     console.log('数据加载失败');
        // });
    }
    render () {
        return (
            <div>
                <h1>测试页面</h1>
                <button onClick={this.handleClick.bind(this)}>测试按钮</button>
            </div>

        )
    }
}
