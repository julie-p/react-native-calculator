import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'

function Buttons() {
    return (
        <View style={styles.buttons}>
            <View style={styles.numbers}></View>
            <View style={styles.operations}></View>
        </View>
    )
};

const styles = StyleSheet.create({
    buttons: {
        flex: 7,
        flexDirection: 'row'
    },
    numbers: {
        flexGrow: 3,
        backgroundColor: 'yellow'
    },
    operations: {
        flex: 1,
        backgroundColor: 'blue'
    }
});

export default Buttons;
