import React, { Component } from 'react';

export default class View extends Component {
	render () {
		return (
			<div>
				<h2>current number is <span style={{ color: 'red'}}>{this.props.number}</span></h2>
			</div>
		)
	}
}
