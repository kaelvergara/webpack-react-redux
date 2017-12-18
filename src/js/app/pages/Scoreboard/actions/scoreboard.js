export const addPlayer = ({name}) => {
    const newPlayer = {
        name,
        score: 0
    };

    return {
        type: 'ADD_PLAYER',
        newPlayer
    };
};

export const removePlayer = ({index}) => {
    return {
        type: 'REMOVE_PLAYER',
        index
    };
};

export const scoreChange = (params) => {
    return {
        type: 'SCORE_CHANGE',
        ...params
    };
};

