import React, { Component } from 'react';
import { Button } from 'antd';

export default class Add extends Component {
	constructor (props) {
		super (props);
	}
	addClick () {
		let newState = this.props.number + 1
		this.props.callbackAdd(newState);
	}
	render () {
		return (
			<Button type="primary" size="large" onClick={this.addClick.bind(this)}>+</Button>
		)
 	}
}
