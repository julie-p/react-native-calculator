import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'

function Result() {
    return (
        <View style={styles.result}>
            <Text style={styles.resultText}>121</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    result: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingRight: 20
    },
    resultText: {
        fontSize: 30,
        color: '#2c3a6a'
    }
});

export default Result;
