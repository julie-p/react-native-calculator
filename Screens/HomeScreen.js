import React from 'react';
import Menu from '../Components/Menu';
import Result from '../Components/Result';
import Calculation from '../Components/Calculation';
import Buttons from '../Components/Buttons';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

function HomeScreen() {
    return (
        <View style={styles.container}>
                <Menu />
                <Result />
                <Calculation />
                <Buttons />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa'
    },
    calculateContainer: {
        paddingRight: 40
    }
});

export default HomeScreen;
