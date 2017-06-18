import React, {Component} from 'react';
import {TabNavigator} from 'react-navigation';
import {StyleSheet} from 'react-native';
import {addNavigationHelpers} from 'react-navigation';
// import {combineReducers} from "redux-immutable";
import {connect, Provider} from "react-redux"
import {createStore, combineReducers} from 'redux';
// import {fromJS} from "immutable";

import page1 from "./page/page1";
import page2 from "./page/page2";

const styles = StyleSheet.create({
    bar: {
        paddingTop: 20,
    },
    tab: {}
});

const AppNavigator = TabNavigator({
    Page1: {screen: page1.Container},
    Page2: {screen: page2.Container},
}, {
    lazy: false,
    tabBarPosition: "top",
    tabBarOptions: {
        showIcon: true,
        showLabel: false,
        style: styles.bar,
        tabStyle: styles.tab,
    }
});

const initialState = (AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Page1')));

const navReducer = (state = initialState, action) => {
    const nextState = AppNavigator.router.getStateForAction(action, state);
    return nextState || state;
};

const appReducer = combineReducers({
    nav: navReducer,
});

class App extends Component {
    render() {
        return (
            <AppNavigator navigation={addNavigationHelpers({
                dispatch: this.props.dispatch,
                state: this.props.nav,
            })}/>
        );
    }
}

const mapStateToProps = (state) => ({
    nav: state.nav
});

const AppWithNavigationState = connect(mapStateToProps)(App);

const store = createStore(appReducer);

export default class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <AppWithNavigationState />
            </Provider>
        );
    }
}