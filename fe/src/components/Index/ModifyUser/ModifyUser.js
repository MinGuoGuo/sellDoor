import React, { Component } from 'react';

export default class ModifyUser extends Component {
    constructor (props) {
        super(props)
    }
    render () {
        return (
            <div>
                <h1>我是修改页面</h1>
                <h3>我带过来的ID是：{this.props.params.id}</h3>
                <h3>我带过来的用户名是：{this.props.params.name}</h3>
            </div>
        )
    }
}