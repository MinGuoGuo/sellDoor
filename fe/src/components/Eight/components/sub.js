import React, { Component } from 'react';
import { Button } from 'antd';

export default class Sub extends Component {
    constructor (props) {
        super (props);
    }
    render () {
        return (
            <Button type="default" onClick={() => {this.props.sub(4)}}>-</Button>
        )
    }
}
