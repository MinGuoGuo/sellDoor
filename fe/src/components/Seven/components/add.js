import React, { Component, PropTypes } from 'react';
import { Button } from 'antd';

export default class Add extends Component {
    constructor (props) {
        super (props);
    }
    /*addClick () {
        this.props.add(4);
    }*/
    render () {
        const { add } = this.props;
        console.log(add);
        return (
            <Button type="primary" onClick={() => {add(4)}}>+</Button>
        )
    }
}

// 限制组件安全
Add.PropTypes = {
    add: PropTypes.func.isRequired
}
