import React from 'react';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';

function SplashScreen(props) {

    setTimeout(() => {
        props.navigation.navigate('Home');
    }, 3000);

    return (
        <ImageBackground 
            resizeMode='contain'
            source={require('../assets/splash-screen-2.gif')} 
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
      backgroundColor: '#fafafa'
    },
});

export default SplashScreen;
