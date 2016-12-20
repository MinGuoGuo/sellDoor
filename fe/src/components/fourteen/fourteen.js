import React, { Component } from 'react';
import Child from './child.js'

export default class Fourteen extends Component {
    constructor (props) {
        super (props);
        this.state = {
            value: ''
        }
    }
    handleChange (e) {
        console.log('1', e.target.value);
        console.log('2', this.refs.input.value);
        this.setState({
            value: this.refs.input.value
        })
    }
    render () {
        return (
            <div>
                <input ref="input"  onChange={this.handleChange.bind(this)} />
                {/*请注意当onChange={() => this.handleChange()} 这种写法时e.target.value不能取到值 */}
                <div>
                    <Child num={this.state.value} />
                </div>
            </div>
        )
    }
}
