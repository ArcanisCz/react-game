import React from 'react';
import {Text, View, StyleSheet, Button, ProgressBarAndroid} from 'react-native';

import {connect} from "util";
import TabIco from "component/navigation/TabIco";

const Component = ({click}) => (
    <View style={styles.page}>

        <Text>aaa</Text>
        <View style={styles.buttons}>
            <View style={styles.button}>
                <ProgressBarAndroid styleAttr="Horizontal" color="red" progress={0.5}/>
            </View>
        </View>
        <View style={styles.buttons}>
            <View style={styles.button}>
                <Button title="Prvni" onPress={() => {
                }}/>
            </View>
            <View style={styles.button}>
                <Button title="Druhy" onPress={() => {
                }}/>
            </View>
        </View>
    </View>
);

const mapStateToProps = () => ({});
const mapDispatchToProps = (dispatch) => ({});

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
    },
    buttons: {
        flexDirection: "row",
        justifyContent: 'space-around',
    },
    button: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
    }
});
