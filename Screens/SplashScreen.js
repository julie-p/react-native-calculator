import React from 'react';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';

function SplashScreen(props) {

    setTimeout(() => {
        props.navigation.navigate('Home');
    }, 4000);

    return (
        <ImageBackground 
            source={require('../assets/splash-screen.gif')} 
            style={styles.container}
        >
        </ImageBackground>
    )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
});

export default SplashScreen;
