import update from 'react-addons-update';

const initialState = {
    players: [
        {name: 'Jim Hoskins', score: 31},
        {name: 'Andrew Chalkley', score: 20},
        {name: 'Alena Holligan', score: 50}
    ]
};

export default function scoreboard(state = initialState, action) {
    switch (action.type) {
        case 'ADD_PLAYER':
            return Object.assign({}, state, {
                players: [
                    ...state.players,
                    action.newPlayer
                ]
            });
        case 'REMOVE_PLAYER': {
            const players = state.players.slice();

            players.splice(action.index, 1);

            return Object.assign({}, state, {
                players
            });
        }
        case 'SCORE_CHANGE': {
            // const players = state.players.slice();

            const score = state.players[action.index].score += action.delta;

            // return Object.assign({}, state, {
            //     players
            // });
            return update(state, {
                players: {
                    [action.index]: {
                        score: {$set: score}
                    }
                }
            });
        }
        default:
            return state;
    }
}

scoreboard.reducer = 'scoreboard';
