import React from 'react';
import {Text, View, StyleSheet, Button, ProgressBarAndroid} from 'react-native';

import TabIco from "component/navigation/TabIco";
import {connect} from "util";
import {getQi, getQiMax} from "state/resources/selectors"
import {addQi, addMaxQi} from "state/resources/actions"

const Component = ({qi, qiMax, addQi, addMaxQi}) => (
    <View style={styles.page}>

        <Text>{qi}/{qiMax}</Text>
        <View style={styles.buttons}>
            <View style={styles.button}>
                <ProgressBarAndroid styleAttr="Horizontal" indeterminate={false} color="red" progress={qi/qiMax}/>
            </View>
        </View>
        <View style={styles.buttons}>
            <View style={styles.button}>
                <Button title="Add QI" onPress={addQi}/>
            </View>
            <View style={styles.button}>
                <Button title="Druhy" onPress={addMaxQi}/>
            </View>
        </View>
    </View>
);

const mapStateToProps = (state) => ({
    qi: getQi(state),
    qiMax: getQiMax(state),
});
const mapDispatchToProps = (dispatch) => ({
    addQi: () => dispatch(addQi()),
    addMaxQi: () => dispatch(addMaxQi()),
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
