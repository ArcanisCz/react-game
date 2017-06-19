import React from 'react';
import {addNavigationHelpers} from 'react-navigation';

import {connect} from "util"
import {getNav} from "state/navigation/selectors";

import AppNavigator from "./Navigator";



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
