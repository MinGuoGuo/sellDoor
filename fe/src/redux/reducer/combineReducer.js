import { combineReducers } from 'redux';
import numbers from './reducers.js';
import person from './searchReducer.js';
import seven from './sevenReducer.js';

//将所有的reducer合并成一个reducer；
const rootRrducer = combineReducers({
    numbers,
    person,
    seven
});

export default rootRrducer;
