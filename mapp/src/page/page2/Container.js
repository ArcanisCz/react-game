import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

import TabIco from "navigation/TabIco";

const Container = () => (
    <View style={styles.page}>
        <Text>Page2</Text>
    </View>
);

Container.navigationOptions = {
    tabBarIcon: ({tintColor}) => (
        <TabIco source={require('./ico.png')} tintColor={tintColor}/>
    )
};

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: "gray"
    }
});

export default Container;