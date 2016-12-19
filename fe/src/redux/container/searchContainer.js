import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Six from '../../components/six-redux/Six.js';
import * as Action from '../action/searchAction.js';

// 将所有的state绑定到ui组件上去；
const mapStateToProps = (state) => {
    return {
        person: state.person
    }
}

// 将action里面所有的方法绑定到ui组件上的props上去；
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(Action, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Six);
