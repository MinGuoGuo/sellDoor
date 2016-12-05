/**
 * Created by fangjie04 on 2016/12/5.
 */

import {SEARCH} from '../action/Action.js';
const text = {name: '', age: ''}
export default function search(state = text, action) {
    switch (action.type) {
        case SEARCH:
            return {
                text: action.text
            }
        default:
            return {
                text: text
            }
    }
}