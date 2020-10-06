import React from 'react';
import Numbers from './Numbers';
import Operations from './Operations';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'

function Buttons() {
    return (
        <View style={styles.buttons}>
            <Numbers />
            <Operations />
        </View>
    )
};

const styles = StyleSheet.create({
    buttons: {
        flex: 7,
        flexDirection: 'row',
    }
});

export default Buttons;
