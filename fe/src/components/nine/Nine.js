import React, { Component } from 'react';
import $ from 'jquery';

export default class Nine extends Component {
    constructor (props) {
        super (props);
    }
    handleClick () {
        console.log(111);
        $.ajax({
            url : '/list_student',
            type: 'GET',
            dataType: 'json',
            success: function (data) {
                console.log(data);
            }
        });
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
