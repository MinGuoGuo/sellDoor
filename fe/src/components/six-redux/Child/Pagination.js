import React, { Component } from 'react';
import { Pagination } from 'antd';

export default class PageList extends Component {
	constructor (props) {
		super (props);
		this.state = {
			current: 1
		}
	}
	getNewPage (number) {
		this.setState({ current: number });
		this.props.getNewPage(number);
	}
	render () {
		return (
			<div style={{marginTop: 20}}>
				<Pagination showQuickJumper defaultCurrent={1} current={this.state.current} pageSize={5} total={this.props.count} onChange={this.getNewPage.bind(this)} />
			</div>
		)
	}
}
