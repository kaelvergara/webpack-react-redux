import {connect} from 'react-redux';
import RandomRender from '../components/RandomRender';

import {reRender} from '../actions/ReRenderActions';

export const mapStateToProps = (state) => {
    return {
        numbers: state.data
    };
};

export const mapDispatchToProps = (dispatch) => {
    return {
        reRender: () => {
            dispatch(reRender());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RandomRender);
