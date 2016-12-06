import { combineReducers } from 'redux';
import number from './reducers.js';
import person from './searchReducer.js';

//将所有的reducer合并成一个reducer；
const rootRrducer = combineReducers({
    number,
    person
});

export default rootRrducer;
