import React, { Component } from 'react';
import { Button } from 'antd';

export default class Sub extends Component {
	constructor (props) {
		super (props);
	}
	subClick () {
		let newState = this.props.number - 1;
		this.props.callbackSub(newState);
	}
	render () {
		return (
			<Button type="default" size="large" onClick={this.subClick.bind(this)}>-</Button>
		)
 	}
}
