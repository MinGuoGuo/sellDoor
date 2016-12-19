import React, { Component, PropTypes } from 'react';
import { Button } from 'antd';
import './home.css';
import Add from './add.js';
import Sub from './sub.js';
import View from './view.js'

export default class Home extends Component {
	constructor (props) {
		super (props);
		this.state = {
			number: 0,
			name: '',
			age: ''
		}
	}
	childClick (newState) {
		this.setState({
			number: newState
		});
	}
	getPerson () {
		this.setState({
			name: this.refs.name.value,
			age: this.refs.age.value
		});
	}
	handleClick (e) {
		console.log(111);
		console.log(e.target.value);
	}
	getAge (e) {
		console.log('年龄');
		console.log(e);
	}
	render () {
		return (
			<div className="home">
				<h1>我是通过props和callback传参!</h1>
				<div className="view">
					<View number= {this.state.number}/>
				</div>
				<div className="sub">
					<Sub number= {this.state.number} callbackSub={this.childClick.bind(this)} />
				</div>
				<div className="add">
					<Add number= {this.state.number} callbackAdd={this.childClick.bind(this)} />
				</div>
				<div style={{marginTop: 15}}>
					姓名：<input placeholder="姓名" ref="name" data-type="name" onChange={this.handleClick.bind(this)}/>
				</div>
				<div style={{marginTop: 15}}>
					年龄: <input placeholder="年龄" ref="age" onChange={() => this.getAge()}/>
				</div>
				<Button style={{margin: '15px 0'}} onClick={() => this.getPerson()}>点击获取姓名和年龄</Button>
				<div>
					<span>姓名：{this.state.name}</span>
					<br />
					<span>年龄: {this.state.age}</span>
				</div>
				<textarea className="txt" defaultValue="haha"></textarea>
			</div>
		)
	}
}
