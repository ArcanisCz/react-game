import React from 'react';
import {combineReducers} from "redux-immutable";
import {createStore} from 'redux';
import {Map} from "immutable";

import navigation from "./navigation";

export default (router) => {
    const appReducer = combineReducers({
        nav: navigation.createReducer(router),
    });
    return createStore(appReducer, Map());
}

