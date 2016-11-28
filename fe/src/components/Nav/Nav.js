import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import { Link } from 'react-router';
import { IndexLink } from 'react-router';
import './Nav.css';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;

//ES6写法
export default class Sider extends Component {
    constructor (props) {
        super(props)
        this.state = {
            current: '1',
            openKeys: []
        }
    }
    handleClick = (e) => {
        console.log(this.state);
        this.setState({ current: e.key });
    }
    onOpenChange =(openKeys) => {
        const state = this.state;
        const latestOpenKey = openKeys.find(key => !(state.openKeys.indexOf(key) > -1));
        const latestCloseKey = state.openKeys.find(key => !(openKeys.indexOf(key) > -1));

        let nextOpenKeys = [];
        if (latestOpenKey) {
            nextOpenKeys = this.getAncestorKeys(latestOpenKey).concat(latestOpenKey);
        }
        if (latestCloseKey) {
            nextOpenKeys = this.getAncestorKeys(latestCloseKey);
        }
        this.setState({ openKeys: nextOpenKeys });
    }
    getAncestorKeys = (key) => {
        const map = {
            sub3: ['sub2']
        };
        return map[key] || [];
    }
    render() {
        return (
            <div>
                <Menu
                    mode="inline"
                    openKeys={this.state.openKeys}
                    selectedKeys={[this.state.current]}
                    style={{ width: 240 }}
                    onOpenChange={this.onOpenChange}
                    onClick={this.handleClick}
                    className="nav"
                >
                    <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
                        <Menu.Item key="1"><Link to="/index">Option 1</Link></Menu.Item>
                        <Menu.Item key="2"><Link to="/second">Option 2</Link></Menu.Item>
                        <Menu.Item key="3"><Link to="/third">Option 3</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
                        <Menu.Item key="5">Option 5</Menu.Item>
                        <Menu.Item key="6">Option 6</Menu.Item>
                        <SubMenu key="sub3" title="Submenu">
                            <Menu.Item key="7">Option 7</Menu.Item>
                            <Menu.Item key="8">Option 8</Menu.Item>
                        </SubMenu>
                    </SubMenu>
                    <SubMenu key="sub4" title={<span><Icon type="setting" /><span>Navigation Three</span></span>}>
                        <Menu.Item key="9">Option 9</Menu.Item>
                        <Menu.Item key="10">Option 10</Menu.Item>
                        <Menu.Item key="11">Option 11</Menu.Item>
                        <Menu.Item key="12">Option 12</Menu.Item>
                        <Menu.Item key="13">Option 9</Menu.Item>
                        <Menu.Item key="14">Option 10</Menu.Item>
                        <Menu.Item key="15">Option 11</Menu.Item>
                        <Menu.Item key="16">Option 12</Menu.Item>
                        <Menu.Item key="17">Option 9</Menu.Item>
                        <Menu.Item key="18">Option 10</Menu.Item>
                        <Menu.Item key="19">Option 11</Menu.Item>
                        <Menu.Item key="20">Option 12</Menu.Item>
                        <Menu.Item key="21">Option 9</Menu.Item>
                        <Menu.Item key="22">Option 10</Menu.Item>
                        <Menu.Item key="23">Option 11</Menu.Item>
                        <Menu.Item key="24">Option 12</Menu.Item>
                        <Menu.Item key="25">Option 9</Menu.Item>
                        <Menu.Item key="26">Option 10</Menu.Item>
                        <Menu.Item key="27">Option 11</Menu.Item>
                        <Menu.Item key="28">Option 12</Menu.Item>
                        <Menu.Item key="29">Option 9</Menu.Item>
                        <Menu.Item key="30">Option 10</Menu.Item>
                        <Menu.Item key="31">Option 11</Menu.Item>
                        <Menu.Item key="32">Option 12</Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        );
    }
}
