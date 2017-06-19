import {Map} from "immutable";

import {ADD_QI, ADD_MAX_QI} from "./actions";

import {combineReducers} from "redux-immutable";

const qi = (state = Map({value: 0, max: 10}), action) => {
    switch (action.type) {
        case ADD_QI:
            return state.get("value") < state.get("max") ? state.set("value", state.get("value") + 1) : state;
        case ADD_MAX_QI: {
            const value = state.get("value");
            const max = state.get("max");
            if (value === max) {
                return state.merge({
                    value: 0,
                    max: max+1,
                })
            }
        }
        default:
            return state;
    }
};

export default combineReducers({qi});