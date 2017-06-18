import React, {Component} from 'react';
import {Text, View, Button, Image, StyleSheet} from 'react-native';

export default class Page1 extends Component {
    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            <Image
                source={require('./ico1.png')}
                style={[styles.icon, {tintColor: tintColor}]}
            />
        )
    };

    render() {
        return (
            <View style={styles.page}>
                <Text>Page1</Text>
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
