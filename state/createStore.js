import React from 'react';
import {combineReducers} from "redux-immutable";
import {createStore} from 'redux';
import {fromJS, Map} from "immutable";

export default (router) => {
    const initialState = fromJS(router.getStateForAction(router.getActionForPathAndParams('QiScreen')));
    const navReducer = (state = initialState, action) => state.merge(router.getStateForAction(action, state.toJS()));
    const appReducer = combineReducers({
        nav: navReducer,
    });
    return createStore(appReducer, Map());
}

