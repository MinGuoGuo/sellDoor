/**
 * Created by fangjie04 on 2016/12/5.
 */
import { combineReducers } from 'redux'
import search from './reducer.js'

//使用redux的combineReducers方法将所有reducer打包起来
const rootReducer = combineReducers({
    search,
})

export default rootReducer