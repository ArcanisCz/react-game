import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

export default class Page2 extends Component {
    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            <Image
                source={require('./ico2.png')}
                style={[styles.icon, {tintColor: tintColor}]}
            />
        )
    };

    render() {
        return (
            <View style={styles.page}>
                <Text>Page2</Text>
            </View>
        )
    }
}

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
