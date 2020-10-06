import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'

function Calculation() {
    return (
        <View style={styles.calculation}></View>
    )
};

const styles = StyleSheet.create({
    calculation: {
        flex: 1,
        backgroundColor: 'green'
    },
});

export default Calculation;
