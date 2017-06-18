import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import TabIco from "common/TabIco";

const Aaa = () => (
    <View style={styles.page}>
        <Text>Page2</Text>
    </View>
);

Aaa.navigationOptions = {
    tabBarIcon: ({tintColor}) => (
        <TabIco
            source={require('./ico.png')}
            tintColor={tintColor}
        />
    )
};


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

export default Aaa;