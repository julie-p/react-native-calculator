import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'

function Calculation() {
    return (
        <View style={styles.calculation}>
            <Text style={styles.calculationText}>11 * 11</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    calculation: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingRight: 20
    },
    calculationText: {
        fontSize: 24,
        color: '#545454'
    }
});

export default Calculation;
