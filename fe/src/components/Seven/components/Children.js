import React, { Component, PropTypes} from 'react';


export default class View extends Component {
    constructor (props) {
        super (props);
    }
    render () {
        const { number } = this.props;
        return (
            <div>
                <h3>total  <span style={{color: 'red'}}>{ number }</span>  times </h3>
            </div>
        )
    }
}

View.PropTypes = {
    number: PropTypes.number.isRequired
}
