import React, { Component, PropTypes } from 'react';

export default class Thirteen extends Component {
    constructor (props) {
        super (props);
    }
    handleClick () {
        console.log(111);
        console.log(this.refs);
        console.log(this.refs.wrap);
        // console.log(this.refs.getDOMNode());
        // this.refs.div.setAttribute('display','none');
        this.refs.wrap.style.display = 'none';
        // this.refs.input.focus();
    }
    render () {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <button onClick={() => this.handleClick()}>点击让文本框聚焦</button>
                <br />
                <div ref="wrap" style={{width: 200, height: 200, border: '1px #ccc solid'}}>我是div呀！</div>
                test: <input ref="input" />
            </div>
        )
    }
}

Thirteen.propTypes = {
    title: PropTypes.string.isRequired
}
Thirteen.defaultProps = {
    title: 'this is a default title'
    // title: 123
}
