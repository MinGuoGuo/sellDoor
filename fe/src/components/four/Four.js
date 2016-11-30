import React, { Component } from 'react';
import ChildBtn from './child/Child.js';

export default class Four extends Component {
    constructor (props) {
        super(props);
        this.state = {
            totalChecked: 0
        }
    }
    onChildChanged (newState) {
        let newTatal = this.state.totalChecked + (newState ? 1 : -1);
        this.setState({
            totalChecked: newTatal
        });
    }
    render () {
        return (
            <div>
                <h1>We are checked {this.state.totalChecked}</h1>
                <ChildBtn text="Toggle me" initialChecked={this.state.checked} callbackParent={this.onChildChanged.bind(this)} />
                <ChildBtn text="Toggle me too" initialChecked={this.state.checked} callbackParent={this.onChildChanged.bind(this)}  />
                <ChildBtn text="Add me" initialChecked={this.state.checked} callbackParent={this.onChildChanged.bind(this)}  />
            </div>
        )
    }
}
