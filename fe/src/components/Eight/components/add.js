import React, { Component } from 'react';
import { Button } from 'antd';

export default class Add extends Component {
    constructor (props) {
        super (props);
    }
    render () {
        return (
            <Button type="primary" onClick={ () =>  {this.props.add(4)}}>+</Button>
        )
    }
}
