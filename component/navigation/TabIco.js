import React from 'react';
import {Image, StyleSheet} from 'react-native';

export default TabIco = ({source, tintColor}) => (
    <Image
        source={source}
        style={[styles.icon, {tintColor: tintColor}]}
    />
)

const styles = StyleSheet.create({
    icon: {
        width: 26,
        height: 26,
    },
});