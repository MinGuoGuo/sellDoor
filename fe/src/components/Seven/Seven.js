import React, { Component, PropTypes } from 'react';
import Add from './components/add.js';
import Sub from './components/sub.js';
import View from './components/children1.js';
import { Button } from 'antd';
import { Link } from 'react-router';

export default class Seven extends Component {
    constructor (props) {
        super (props);
    }
    render () {
        const { add, sub, number } = this.props;
        return (
            <div>
                <h1>redux组件与组件交互并且传参</h1>
                <div style={{margin: '20px 0'}}>
                    <View number={number} />
                </div>
                <div style={{marginBottom: 20}}>
                    <Sub sub={sub} />
                    <span style={{margin: '0 5px'}}></span>
                    <Add add={add} />
                </div>
                <Button type="primary" size="large"><Link to="/child">结果</Link></Button>
            </div>
        )
    }
}

//限制组件安全
Seven.PropTypes = {
    sub: PropTypes.func.isRequired,
    add: PropTypes.func.isRequired,
    number: PropTypes.number.isRequired
}
