import {connect} from 'react-redux';
import Scoreboard from '../components/Scoreboard';
import {addPlayer, removePlayer, scoreChange} from '../actions/scoreboard';

export const mapStateToProps = (state) => {
    return {
        players: state.scoreboard.players
    };
};

export const mapDispatchToProps = (dispatch) => {
    return {
        onAddPlayer: ({name}) => dispatch(addPlayer({name})),
        onRemovePlayer: ({index}) => dispatch(removePlayer({index})),
        onScoreChange: ({index, delta}) => dispatch(scoreChange({index, delta}))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Scoreboard);
