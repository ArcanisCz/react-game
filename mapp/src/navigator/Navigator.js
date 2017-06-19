import React from 'react';
import {TabNavigator} from 'react-navigation';
import {StyleSheet} from 'react-native';

import page1 from "../page/page1";
import page2 from "../page/page2";

const styles = StyleSheet.create({
    bar: {
        paddingTop: 20,
    },
    tab: {}
});

export default AppNavigator = TabNavigator({
    Page1: {screen: page1.Container},
    Page2: {screen: page2.Container},
}, {
    lazy: false,
    swipeEnabled: false,
    tabBarPosition: "top",
    tabBarOptions: {
        showIcon: true,
        showLabel: false,
        style: styles.bar,
        tabStyle: styles.tab,
    }
});


export const AppNavigator1 = TabNavigator({
    Page1: {screen: page1.Container},
    Page2: {screen: page2.Container},
}, {
    lazy: false,
    swipeEnabled: true,
    tabBarPosition: "top",
    tabBarOptions: {
        showIcon: true,
        showLabel: false,
        style: styles.bar,
        tabStyle: styles.tab,
    },
    navigationOptions: {
        tabBarVisible: false,
    }
});