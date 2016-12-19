import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Children from '../../components/Seven/components/Children.js';
import * as Action from '../action/action.js';

//将state绑定到ui组件上去；
const mapStateToProps = (state) => {
    return {
        number: state.seven
    }
}

// 将action里面的所有方法绑定到ui组件上的props上去；
/*const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(Action, dispatch);
}*/

export default connect(mapStateToProps)(Children);
