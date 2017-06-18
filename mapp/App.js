import React, {Component} from 'react';
import {TabNavigator} from 'react-navigation';
import {StyleSheet} from 'react-native';
import {addNavigationHelpers} from 'react-navigation';
import {combineReducers} from "redux-immutable";
import {connect, Provider} from "react-redux"
import {createStore} from 'redux';
import {fromJS, Map} from "immutable";

import page1 from "./src/page/page1";
import page2 from "./src/page/page2";

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

const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Page1'));

const navReducer = (state = fromJS(initialState), action) => {
    return state.merge(AppNavigator.router.getStateForAction(action, state.toJS()));
};

const appReducer = combineReducers({
    nav: navReducer,
});

class App extends Component {
    render() {
        return (
            <AppNavigator navigation={addNavigationHelpers({
                dispatch: this.props.dispatch,
                state: this.props.nav ? this.props.nav.toJS() : this.props.nav,
            })}/>
        );
    }
}

const mapStateToProps = (state) => ({
    nav: state.get("nav")
});

const AppWithNavigationState = connect(mapStateToProps)(App);

const store = createStore(appReducer, Map());

export default class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <AppWithNavigationState />
            </Provider>
        );
    }
}