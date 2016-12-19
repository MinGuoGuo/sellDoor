import React, { Component } from 'react';
import { Button } from 'antd';

export default class Add extends Component {
    constructor (props) {
        super (props);
    }
    addClick () {
        this.props.add(4);
    }
    render () {
        return (
            <Button type="primary" onClick={this.addClick.bind(this)}>+</Button>
        )
    }
}
