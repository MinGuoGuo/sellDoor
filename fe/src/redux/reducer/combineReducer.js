import { combineReducers } from 'redux';
import number from './reducers.js';
import person from './searchReducer.js';
import seven from './searchReducer.js';

//将所有的reducer合并成一个reducer；
const rootRrducer = combineReducers({
    number,
    person,
    seven
});

export default rootRrducer;
