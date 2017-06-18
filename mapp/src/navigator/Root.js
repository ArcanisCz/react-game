import React from 'react';
import {addNavigationHelpers} from 'react-navigation';
import {connect} from "react-redux"
import {Map} from "immutable";

import AppNavigator from "./Navigator";

const App = ({nav, dispatch}) => (
    <AppNavigator navigation={addNavigationHelpers({
        dispatch: dispatch,
        state: nav.toJS(),
    })}/>
);

App.defaultProps = {
    nav: Map()
};

const mapStateToProps = (state) => ({
    nav: state.get("nav")
});

export const router = AppNavigator.router;
export default Aaa = connect(mapStateToProps)(App);
