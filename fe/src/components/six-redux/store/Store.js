/**
 * Created by fangjie04 on 2016/12/5.
 */

import {createStore} from "redux";
import reducer from "../reducer/rootReducer.js";
const store = createStore(reducer);

export default function configureStore() {
    return store;
}