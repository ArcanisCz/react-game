import React, {Component} from 'react';
import {NavigationActions} from 'react-navigation';
import {connect} from "react-redux";
import {Text, View, Button, Image, StyleSheet} from 'react-native';

import TabIco from "navigation/TabIco";

const DumbComponent = ({click}) => (
    <View style={styles.page}>
        <Text>Page1</Text>
        <Button title="aaa" onPress={click}/>
    </View>
);

const mapStateToProps = () => ({});
const mapDispatchToProps = (dispatch) => ({
    click: () => dispatch({
        type: NavigationActions.NAVIGATE,
        routeName: "Page2",
    })
});

const Container = connect(mapStateToProps, mapDispatchToProps)(DumbComponent);

Container.navigationOptions = {
    tabBarIcon: ({tintColor}) => (
        <TabIco
            source={require('./ico.png')}
            tintColor={tintColor}
        />
    )
};

export default Container;

const styles = StyleSheet.create({
    icon: {
        width: 26,
        height: 26,
    },
    page: {
        flex: 1,
        backgroundColor: "gray"
    }
});
