import React from 'react';
import {addNavigationHelpers} from 'react-navigation';
import {connect} from "react-redux"

import AppNavigator from "./Navigator";

import {getNav} from "state/navigation/selectors";

const App = ({nav, dispatch}) => (
    <AppNavigator
        navigation={addNavigationHelpers({
            dispatch: dispatch,
            state: nav.toJS(),
        })}
    />
);

const mapStateToProps = (state) => ({
    nav: getNav(state)
});

export const router = AppNavigator.router;
export default connect(mapStateToProps)(App);
