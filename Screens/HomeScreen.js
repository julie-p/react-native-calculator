import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
});

export default HomeScreen;
