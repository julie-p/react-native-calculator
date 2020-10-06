import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'

function Operations() {
    return (
        <View style={styles.operations}>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
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
        backgroundColor: '#fff8f6',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowColor: '#545454',
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
        paddingVertical: 15,
        paddingHorizontal: 10,
    },
    buttonText: {
        color: '#E98B31',
        textAlign: 'center'
    }
});

export default Operations;
