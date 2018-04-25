import { combineReducers } from "redux";

import reducer from "./reducer";
import spinReducer from "./spinReducer";
import errorReducer from "./errorReducer";

const combinedReducers = combineReducers({
    reducer,
    spinReducer,
    errorReducer
});

export default combinedReducers;