import React from 'react';
import {combineReducers} from "redux-immutable";
import {createStore} from 'redux';
import {Map} from "immutable";

import navigation from "./navigation";
import resources from "./resources";

export default (router) => {
    const appReducer = combineReducers({
        nav: navigation.createReducer(router),
        resources: resources.reducer,
    });
    return createStore(appReducer, Map());
}

