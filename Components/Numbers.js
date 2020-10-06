import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

function Numbers() {
    return (
        <View style={styles.numbers}>
            <View style={styles.row}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>0</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>0</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>0</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <View style={styles.button}>
                    <TouchableOpacity>
                        <Text style={styles.text}>0</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.button}>
                    <TouchableOpacity >
                        <Text style={styles.text}>0</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.button}>
                    <TouchableOpacity>
                        <Text style={styles.text}>0</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.button}>
                    <TouchableOpacity>
                        <Text style={styles.text}>0</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.button}>
                    <TouchableOpacity>
                        <Text style={styles.text}>0</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.button}>
                    <TouchableOpacity>
                        <Text style={styles.text}>0</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.button}>
                    <TouchableOpacity>
                        <Text style={styles.text}>0</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.button}>
                    <TouchableOpacity>
                        <Text style={styles.text}>0</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.button}>
                    <TouchableOpacity>
                        <Text style={styles.text}>0</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.button}>
                    <TouchableOpacity>
                        <Text style={styles.text}>0</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.button}>
                    <TouchableOpacity>
                        <Text style={styles.text}>0</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.button}>
                    <TouchableOpacity>
                        <Text style={styles.text}>0</Text>
                    </TouchableOpacity>
                </View>
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
        alignItems: 'center',
        justifyContent: 'center',
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
        color: "#8930E8",
        textAlign: 'center'
    },
    text: {
        textAlign: 'center',
        color: '#999'
    }
});

export default Numbers;
