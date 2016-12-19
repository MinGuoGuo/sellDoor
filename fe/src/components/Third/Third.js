import React, { Component } from 'react';
import Search from './SearchBox/Search.js';
import Table from './Content/Content.js';
import './Third.css';

export default class Third extends Component {
	constructor (props) {
		super(props)
		this.state = {
			pageNo: 1,
			count: 1,
			name: '',
			age: ''
		}
	}
	getNewValue (name, age) {
		this.setState({
			name: name,
			age: age
		});
	}
	render () {
        return (
            <div>
            	<div className="search">
            		<Search getValue={this.getNewValue.bind(this)} name={this.state.name} age={this.state.age}/>
            	</div>
            	<div className="table">
            		<Table name={this.state.name} age={this.state.age}/>
            	</div>
            </div>
        )
    }
}
