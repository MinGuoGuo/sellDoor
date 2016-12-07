import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Seven from '../../components/Seven/Seven.js';
import Add from '../../components/Seven/components/add.js'
import * as Action from '../action/sevenAction.js';

//将state绑定到ui组件上去；
const mapStateToProps = (state) => {
    return {
        number: state.seven
    }
}

// 将action里面的所有方法绑定到ui组件上的props上去；
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(Action, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Seven);
