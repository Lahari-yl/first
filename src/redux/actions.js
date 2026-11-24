import { ADD, SUB, RESET } from "./actionstype.js";
export const add = (value) => {
    return {
        type: ADD,
        payload: value
    }
}
export const sub = (value) => {
    return {
        type: SUB,
        payload: value
    }
}
export const reset = () => {
    return {
        type: RESET
    }
}