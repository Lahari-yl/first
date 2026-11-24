import { createStore } from "redux";
import marksReducer from "./reducer";
const store = createStore(marksReducer);
export default store;