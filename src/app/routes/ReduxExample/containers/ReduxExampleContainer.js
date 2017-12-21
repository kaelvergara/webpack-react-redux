import { connect } from 'react-redux';
import ReduxExampleComponent from '../components/ReduxExampleComponent';
import { editText } from '../actions/ReduxExampleActions';

export const mapStateToProps = (state) => {
    return {
        text: state.text
    }
}

export const mapDispatchToProps = (dispatch) => {
    return {
        onEditText: (text) => {
            dispatch(editText(text))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ReduxExampleComponent)
