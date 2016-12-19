import React, { Component, PropTypes } from 'react';
import Search from './Child/Search.js';
import Table from './Child/Table.js';

export default class Six extends Component {
    constructor (props) {
        super (props);
    }
    render () {
        const { search, person } = this.props;
        console.log('person', person);
        return (
            <div>
                <h1>
                    我是第六个页面！用redux来让子组件进行数据交流
                </h1>
                <div style={{margin: '20px '}}>
                    <Search search={search} />
                </div>
                <div>
                    <Table person={person} />
                </div>
            </div>
        )
    }
}

// 限制组件安全；
Six.PropTypes = {
    person: PropTypes.object.isRequired,
    search: PropTypes.func.isRequired
}
