import React, { Component } from 'react';

export default class Child extends Component {
    constructor (props) {
        super(props);
        this.state = {
            checked: this.props.initialChecked
        }
    }
    onTextChange () {
        let newState = !this.state.checked;
        this.setState = ({
            checked: newState
        });
        // 这里要注意：setState 是一个异步方法，所以需要操作缓存的当前值
        this.props.callbackParent(newState);
    }
    render () {
        console.log(this.props.initialChecked);
        return (
            <div>
                <label>{this.props.text}：<input type="checkbox" checked={this.state.checked} onChange={this.onTextChange.bind(this)} /></label>
            </div>
        )
    }
}
