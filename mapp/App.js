import React from 'react';
import {combineReducers} from "redux-immutable";
import {Provider} from "react-redux"
import {createStore} from 'redux';
import {fromJS, Map} from "immutable";

import Root, {router} from "./src/navigator/Root";

const initialState = fromJS(router.getStateForAction(router.getActionForPathAndParams('QiScreen')));
const navReducer = (state = initialState, action) => state.merge(router.getStateForAction(action, state.toJS()));
const appReducer = combineReducers({
    nav: navReducer,
});
const store = createStore(appReducer, Map());

export default App = () => (
    <Provider store={store}>
        <Root />
    </Provider>
);
