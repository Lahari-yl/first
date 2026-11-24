import { ADD, SUB, RESET } from "./actionstype";
const initialState = {
    marks: 10
}
function marksReducer(state = initialState, action) {
    switch (action.type) {
        case ADD:
            return {
                ...state,
                marks: state.marks + action.payload
            }
        case SUB:
            return {
                ...state,
                marks: state.marks - action.payload
            }
        case RESET:
            return {
                ...state,
                marks: 0
            }
        default:
            return state;
    }
}
export default marksReducer;