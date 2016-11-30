import React, { Component } from 'react';
import Search from './SearchBox/Search.js';
import Table from './Content/Content.js';
import PageList from './Pagination/Pagination.js';
import './Third.css';

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
            	<div className="search">
            		<Search />
            	</div>
            	<div className="table">
            		<Table />
            	</div>
            	<div>
            		<PageList />
            	</div>
            </div>
        )
    }
}