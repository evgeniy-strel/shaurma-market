import { combineReducers } from "redux";
import filters from "./filters";
import shavermas from './shavermas';

const rootReducer = combineReducers({
    filters,
    shavermas,
});

export default rootReducer;