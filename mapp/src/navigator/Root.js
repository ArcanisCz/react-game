import React from 'react';
import {addNavigationHelpers} from 'react-navigation';
import {connect} from "react-redux"
import {Map} from "immutable";

import AppNavigator, {AppNavigator1} from "./Navigator";

const App = ({nav, dispatch, aaa}) => aaa? (
    <AppNavigator1
        navigation={addNavigationHelpers({
            dispatch: dispatch,
            state: nav.toJS(),
        })}
    />
) :(
    <AppNavigator
        navigation={addNavigationHelpers({
            dispatch: dispatch,
            state: nav.toJS(),
        })}
    />
);

App.defaultProps = {
    nav: Map(),
    aaa: false,
};

const mapStateToProps = (state) => ({
    nav: state.get("nav")
});

export const router = AppNavigator.router;
export default Aaa = connect(mapStateToProps)(App);
