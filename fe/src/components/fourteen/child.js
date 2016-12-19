import React, { Component } from 'react';

export default class Fourteen extends Component {
    constructor (props) {
        super (props);
    }
    componentWillReceiveProps (obj) {
        console.log(obj);
    }
    render () {
        return (
            <div>
                curren no is <span>{this.props.num}</span>
            </div>
        )
    }
}
