import React, { Component } from 'react';

export default class Test extends Component {
    constructor (props) {
        super (props);
        this.state = {
            opacity: 1.0
        }
    }
    handleClick () {
        this.setState({
            display: this.state.display == 'block' ? 'none' : 'block'
        });
    }
    componentDidMount () {
        setInterval(() => {
            let opacity = this.state.opacity;
            opacity -= .05;
            if (opacity < 0.1) {
                opacity = 1.0;
            }
            this.setState({
                opacity: opacity
            });
        }, 500)
    }
    render () {
        return (
            <div style={{opacity: this.state.opacity, background: 'red'}}>
                Hello {this.props.name}
            </div>
        )
    }
}

Test.defaultProps = {
    name: 'hello!!'
}
