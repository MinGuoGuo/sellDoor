import React, { Component } from 'react';
import { Breadcrumb, Icon,  Pagination} from 'antd';

export default class Third extends Component {
	constructor (props) {
		super(props)
		this.state = {
			pageNo: 1
		}
	}
	pageChange = (page) => {
		console.log(page);
		this.setState({ pageNo: page });
		console.log(this.state.pageNo);
	}
	render () {
        return (
            <div>
                <h1>我是第三个页面，嘿嘿！</h1>
                <br />
                <Pagination showQuickJumper defaultCurrent={this.state.pageNo} total={500} onChange={this.pageChange} />
            </div>
        )
    }
}