import React, { Component } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import './Home.css';

export default class Home extends Component {
    constructor (props) {
        super(props)
    }
    render () {
        return (
            <div>
                <div className="Header">
                    <Header  />
                </div>
                <div className="Nav">
                    <Nav />
                </div>
                <div className="Content">
                    {this.props.children}
                </div>
                <div className="Footer">
                    <Footer />
                </div>
            </div>
        )
    }
}