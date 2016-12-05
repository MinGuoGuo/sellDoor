/**
 * Created by fangjie04 on 2016/12/5.
 */
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import Six from '../Six.js';
import * as Action from '../action/Action.js';

function mapStateToProps(state) {
    return {value: state.value}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Action, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Six)
