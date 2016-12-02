import React, { Component } from 'react';
import Search from './Child/Search.js';
import Table from './Child/Table.js';

export default class Six extends Component {
    constructor (props) {
        super (props);
    }
    render () {
        return (
            <div>
                <h1>
                    我是第六个页面！用redux来让子组件进行数据交流
                </h1>
                <div style={{margin: '20px '}}>
                    <Search />
                </div>
                <div>
                    <Table />
                </div>
            </div>
        )
    }
}
