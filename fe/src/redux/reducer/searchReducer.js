import { SEARCH } from '../action/searchAction.js';

const person = (state = {}, action) => {
    switch (action.type) {
        case SEARCH:
            return Object.assign( {}, state, action.text);
        default:
            return state;
    }

}
export default person;
