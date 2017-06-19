import React from 'react';
import {connect} from "react-redux";
import {Text, View, StyleSheet} from 'react-native';

import TabIco from "component/navigation/TabIco";

const Component = ({click}) => (
    <View style={styles.page}>
        <Text>aaa</Text>
        <Text>bbb</Text>
    </View>
);

const mapStateToProps = () => ({
});
const mapDispatchToProps = (dispatch) => ({
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

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
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }
});
