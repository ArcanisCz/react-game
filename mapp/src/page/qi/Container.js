import React from 'react';
import {connect} from "react-redux";
import {Text, View, StyleSheet} from 'react-native';

import TabIco from "navigation/TabIco";

const DumbComponent = ({click}) => (
    <View style={styles.page}>
        <Text>aaa</Text>
    </View>
);

const mapStateToProps = () => ({});
const mapDispatchToProps = (dispatch) => ({
});

const Container = connect(mapStateToProps, mapDispatchToProps)(DumbComponent);

Container.navigationOptions = {
    tabBarVisible: false,
    tabBarIcon: ({tintColor}) => (
        <TabIco source={require('./ico.png')} tintColor={tintColor}/>
    )
};

export default Container;

const styles = StyleSheet.create({
    page: {
        flex: 1,
    }
});
