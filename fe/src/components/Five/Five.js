import React, { Component } from 'react';
import Add from './Child/AddChild.js';
import Sub from './Child/SubChild.js';

export default class Five extends Component {
    constructor (props) {
        super(props);
        this.state = {
            times: 0
        }
    }
    onChangeChild (newTimes) {
        this.setState({ times: newTimes });
    }
    render () {
        return (
            <div>
                <h1>Click times {this.state.times}</h1>
                <Add text="add" initialTimes={this.state.times} callbackParent={this.onChangeChild.bind(this)} />
                <Sub text="sub" initialTimes={this.state.times} callbackParent={this.onChangeChild.bind(this)} />
            </div>
        )
    }
}
