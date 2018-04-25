import { combineReducers } from "redux";

import reducer from "./reducer";
import spinReducer from "./spinReducer";

const combinedReducers = combineReducers({
    reducer,
    spinReducer
});

export default combinedReducers;