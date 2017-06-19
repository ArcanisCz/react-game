import React from 'react';
import {combineReducers} from "redux-immutable";
import {Provider} from "react-redux"
import {createStore} from 'redux';
import {fromJS, Map} from "immutable";

import app from "./screen";
console.log(app);

const initialState = fromJS(app.router.getStateForAction(app.router.getActionForPathAndParams('QiScreen')));
const navReducer = (state = initialState, action) => state.merge(app.router.getStateForAction(action, state.toJS()));
const appReducer = combineReducers({
    nav: navReducer,
});
const store = createStore(appReducer, Map());

export default App = () => (
    <Provider store={store}>
        <app.Root />
    </Provider>
);
