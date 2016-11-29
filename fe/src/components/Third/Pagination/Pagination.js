import React, { Component } from 'react';
import { Pagination } from 'antd';

export default class PageList extends Component {
	render () {
		return (
			<div>
				<Pagination showQuickJumper defaultCurrent={2} pageSize={5} total={500} />
			</div>
		)
	}
}