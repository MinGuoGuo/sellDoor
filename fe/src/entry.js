import React, {Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import {Router, Route, hashHistory, browserHistory, IndexRoute} from 'react-router';

import Home from './components/Home/Home';
import Index from './components/Index/Index';
import AddUser from './components/Index/AddUser/AddUser';
import ModifyUser from './components/Index/ModifyUser/ModifyUser';
import Second from './components/Second/Second';
import Third from './components/Third/Third';
import Four from './components/four/Four.js';
import Five from './components/Five/Five.js';
import Six from './components/six-redux/Six.js'
import Eight from './components/Eight/Eight.js';
import Seven from './components/Seven/Seven.js';
import addUsers from './components/Third/addUser/addUsers.js'
import Nine from './components/nine/Nine.js'
import Ten from './components/childComponent/first/child.js'
import Eleven from './components/eleven/eleven.js'


//redux来控制的；
import { Provider } from "react-redux";
import Container from "./redux/container/container.js";
import searchContainer from './redux/container/searchContainer.js';
import rootStore from './redux/store/store.js';
import EightContainer from './redux/container/container.js';
import SevenCoontainer from './redux/container/sevenContaier.js'
import childContainer from './redux/container/childContainer.js'
/*
 * 以下方法是直接将组件渲染出来；下面我们看看如何用路由的形式将组件渲染出来
 * */
/*render(
 <Home />,
 document.getElementById('root')
 );*/

/*
 * 将组件直接挂载在路由上；
 * */
const appStore = rootStore();

render((
    <Provider store={appStore}>
        <Router history={hashHistory}>
            <Route path="/" component={Home}>
                <Route path="/index" component={Index}/>
                <Route path="/addUser" component={AddUser}/>
                <Route path="/modifyUser/:id/:name" component={ModifyUser}/>
                <Route path="/second" component={Second}/>
                <Route path="/third" component={Third}/>
                <Route path="/four" component={Four}/>
                <Route path="/five" component={Five}/>
                <Route path="/six" component={searchContainer}/>
                <Route path="/seven" component={SevenCoontainer} />
                <Route path="/eight" component={EightContainer}/>
                <Route path="/child" component={childContainer}/>
                <Route path="/addusers" component={addUsers} />
                <Route path="/nine" component={Nine} />
                <Route path="/ten" component={Ten} />
                <Route path="/eleven" component={Eleven} />
            </Route>
        </Router>
    </Provider>
), document.getElementById('root'));
