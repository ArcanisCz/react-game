import React from 'react';
import {TabNavigator} from 'react-navigation';
import {StyleSheet} from 'react-native';

import page1 from "../page/qi";

const styles = StyleSheet.create({
    bar: {
        paddingTop: 20,
    },
    tab: {}
});

export default AppNavigator = TabNavigator({
    QiScreen: {screen: page1.Container},
}, {
    swipeEnabled: false,
    tabBarPosition: "top",
    tabBarOptions: {
        showIcon: true,
        showLabel: false,
        style: styles.bar,
        tabStyle: styles.tab,
    }
});
