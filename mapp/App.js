import React from 'react';
import {TabNavigator} from 'react-navigation';
import {StyleSheet} from 'react-native';

import Page1 from "./page/Page1";
import Page2 from "./page/Page2";

const styles = StyleSheet.create({
    bar: {
        paddingTop: 20,
    },
    tab: {}
});

export default SimpleApp = TabNavigator({
    Page1: {screen: Page1},
    Page2: {screen: Page2},
}, {
    lazy: false,
    initialRouteName: "Page1",
    tabBarPosition: "top",
    tabBarOptions: {
        showIcon: true,
        showLabel: false,
        style: styles.bar,
        tabStyle: styles.tab,
    }
});
