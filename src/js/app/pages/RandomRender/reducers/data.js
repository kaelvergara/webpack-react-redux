import {fromJS} from 'immutable';

const generateNumbers = () => {
    const numbers = [];

    for (let y = 0; y < 60; y++) {
        const row = [];

        for (let x = 0; x < 170; x++) {
            row.push('O');
        }

        numbers.push(row);
    }

    return numbers;
};

generateNumbers();

const immutableInitialState = fromJS(generateNumbers());


const data = (state = immutableInitialState, action) => {
    switch (action.type) {
        case 'UPDATE_VALUE':
            return state.setIn([action.y, action.x], action.value);
        default:
            return state;
    }
};

export default data;
