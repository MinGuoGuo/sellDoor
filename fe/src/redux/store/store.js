import { createStore } from 'redux';
import reducer from '../reducer/combineReducer.js';

const store = createStore(reducer);

//将创建好的store返回出去；
const rootStore = () => store;

export default rootStore;
