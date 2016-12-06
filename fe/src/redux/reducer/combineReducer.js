import { combineReducers } from 'redux';
import number from './reducers.js';

//将所有的reducer合并成一个reducer；
const rootRrducer = combineReducers({
    number
});

export default rootRrducer;
