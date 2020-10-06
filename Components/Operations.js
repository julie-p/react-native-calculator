import React from 'react'
import { Text, View, TouchableOpacity, Button, StyleSheet } from 'react-native'

function Operations() {
    return (
        <View style={styles.operations}>
            <View style={styles.button}><Button title="+" color="#FD9583" /></View>
            <View style={styles.button}><Button title="+" color="#FD9583"/></View>
            <View style={styles.button}><Button title="+" color="#FD9583"/></View>
            <View style={styles.button}><Button title="+" color="#FD9583"/></View>
        </View>
    )
};

const styles = StyleSheet.create({
    operations: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'stretch',
        paddingRight: 40
    },
    button: {
        width: 50,
        borderRadius: 100,
        backgroundColor: '#ffff',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowColor: '#545454',
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
        paddingVertical: 5,
        paddingHorizontal: 10,
    }
});

export default Operations;
