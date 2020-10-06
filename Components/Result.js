import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'

function Result() {
    return (
        <View style={styles.result}></View>
    )
};

const styles = StyleSheet.create({
    result: {
        flex: 2,
        backgroundColor: 'red'
    },
});

export default Result;
