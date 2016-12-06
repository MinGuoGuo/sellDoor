import { ADD, SUB } from '../action/action.js';
const number = (state = 0, action) => {
    switch (action.type) {
        case 'ADD':
            return state + action.text;
        case 'SUB':
            return state - action.text;
        default:
            return state;
    }
    console.log(action.text);
}

export default number;
