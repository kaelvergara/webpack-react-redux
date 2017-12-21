export default function(state = '', action){
    switch (action.type) {
        case 'EDIT':
            return action.text;
        default:
            return state
    }
}
