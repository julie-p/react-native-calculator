import React from 'react'
import { Text, View, TouchableOpacity, Button, StyleSheet } from 'react-native'

function Numbers() {
    return (
        <View style={styles.numbers}>
            <View style={styles.row}>
                <View style={styles.button}><Button title="0" color="#91969c" /></View>
                <View style={styles.button}><Button title="0" color="#91969c" /></View>
                <View style={styles.button}><Button title="0" color="#91969c" /></View>
            </View>
            <View style={styles.row}>
                <View style={styles.button}><Button title="0" color="#91969c" /></View>
                <View style={styles.button}><Button title="0" color="#91969c" /></View>
                <View style={styles.button}><Button title="0" color="#91969c" /></View>
            </View>
            <View style={styles.row}>
                <View style={styles.button}><Button title="0" color="#91969c" /></View>
                <View style={styles.button}><Button title="0" color="#91969c" /></View>
                <View style={styles.button}><Button title="0" color="#91969c" /></View>
            </View>
            <View style={styles.row}>
                <View style={styles.button}><Button title="0" color="#91969c" /></View>
                <View style={styles.button}><Button title="0" color="#91969c" /></View>
                <View style={styles.button}><Button title="0" color="#91969c" /></View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    numbers: {
        flexGrow: 3
    }, 
    row: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        marginRight: 20
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

export default Numbers;
