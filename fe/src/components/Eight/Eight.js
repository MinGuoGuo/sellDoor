import React, { Component, PropTypes } from 'react';
import Add from './components/add.js';
import Sub from './components/sub.js';
import View from './components/children1.js';

export default class Eight extends Component {
    constructor (props) {
        super (props);
    }
    render () {
        const { add, sub, figure } = this.props;
        return (
            <div>
                <h1>redux组件与组件交互并且传参</h1>
                <div style={{margin: '20px 0'}}>
                    <View number={figure} />
                </div>
                <div>
                    <Sub sub={sub}/>
                    <span style={{margin: '0 5px'}}></span>
                    <Add add={add} />
                </div>
            </div>
        )
    }
}

//限制组件安全
Eight.propTypes = {
    sub: PropTypes.func.isRequired,
    add: PropTypes.func.isRequired,
    figure: PropTypes.number.isRequired
}
