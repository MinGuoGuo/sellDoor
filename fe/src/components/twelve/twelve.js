import React, { Component } from 'react';
import 'react-dom';

export default class Twelve extends Component {
    constructor (props) {
        super (props);
    }
    handleClick (e) {
        //console.log(typeof e.target.value);
        let index = parseInt(e.target.value);
        console.log('index', index);
        if (index > 0 && index < 10) {
            let refName = 'input' + index;
            console.log(refName);
            // inputDome = React.findDomeNode(this.refs[refName]);
            let inputDome = this.refs[refName].getDOMNode();
            inputDome.focus();
        }
    }
    render () {
        let inputs = [];
        for (let i = 0; i < 10; i++) {
            inputs.push(<div key={i}><li><input type="text" ref={"input" + i}/></li></div>)
        }
        console.log(inputs);
        return (
            <div>
                <label>在这里输入任意input框的索引，光标会自动聚焦到输入框内</label>
                <input type="text" id="input" onChange={this.handleClick.bind(this)}/>
                <hr />
                <ol>
                    {inputs}
                </ol>
            </div>
        )
    }
}
