import React, { Component } from 'react';
import './child.css';

export default class SubChild extends Component {
    constructor (props) {
        super(props);
        // this.state = {
        //     initialTimes: this.props.initialTimes
        // }
    }
    subClick () {
        let newTimes = this.props.initialTimes - 1;
        //this.setState({ initialTimes: newTimes });
        this.props.callbackParent(newTimes);
    }
    render () {
        return (
            <div>
                <button className="btn" onClick={this.subClick.bind(this)}>{this.props.text}</button>
            </div>
        )
    }
}
