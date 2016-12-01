import React, { Component } from 'react';
import './child.css'

export default class Child extends Component {
    constructor (props) {
        super(props);
        // this.state = {
        //     initialTimes: this.props.initialTimes
        // }
    }
    addClick () {
        let newTimes = this.props.initialTimes + 1;
        //this.setState({ initialTimes: newTimes });
         // 这里要注意：setState 是一个异步方法，所以需要操作缓存的当前值
        this.props.callbackParent(newTimes);
    }
    render () {
        return (
            <div>
                <button className="btn" onClick={this.addClick.bind(this)}>{this.props.text}</button>
            </div>
        )
    }
}
