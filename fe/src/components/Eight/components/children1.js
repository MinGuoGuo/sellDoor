import React, { Component } from 'react';

export default class View extends Component {
    constructor (props) {
        super (props);
    }
    render () {
        return (
            <div>
                <h3>total  <span style={{color: 'red'}}>{this.props.number}</span>  times </h3>
            </div>
        )
    }
}
