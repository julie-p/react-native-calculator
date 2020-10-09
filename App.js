import React, { useState, useEffect } from 'react';
import SplashScreen from './Screens/SplashScreen';
import HomeScreen from './Screens/HomeScreen';
import DrawerContent from './Components/DrawerContent';
import { 
  NavigationContainer, 
  DarkTheme, 
  DefaultTheme
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Icon } from 'native-base';
import { EventRegister } from 'react-native-event-listeners';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerRoute() {
  return (
    <Drawer.Navigator 
      drawerContent={props => <DrawerContent {...props}/>}
      drawerStyle={{
        backgroundColor: '#fafafa',
        width: 240,
      }}
    >
      <Drawer.Screen 
        name="Home" 
        component={HomeScreen}
        options={{
          drawerIcon: ({focused, color, size}) => (
            <Icon name="home" style={{fontSize: size, color: color}} />
          )
        }}
      />
    </Drawer.Navigator>
  )
};

export default function App() {

  const [ darkApp, setDarkApp ] = useState(false);

  const darkTheme={
    ...DarkTheme,
    colors:{
      ...DarkTheme.colors,
      backgroundColor:"#27345f",
      iconColor:"#d5ddfd",
      buttonColor: '#8998e3',
      altButton: '#ffa801',
      shadowColor: '##fff',
      text: '#fafafa',
      altText: '#fafafa'
    }
  };

  const lightTheme ={
    ...DefaultTheme,
    colors:{
      ...DefaultTheme.colors,
      backgroundColor:"#fafafa",
      iconColor:"#8998e3",
      buttonColor: '#fafafa',
      altButton: '#ffa801',
      shadowColor: '##fff',
      text: '#8998e3',
      altText: '#fafafa'
    }
  };

  const theme = darkApp ? darkTheme : lightTheme;

  useEffect(() => {
    let eventListener = EventRegister.addEventListener(
      'changeThemeEvent', 
      (data) => {
        setDarkApp(data);
      })
    return() => {
      EventRegister.removeEventListener(eventListener);
    }
  }, []);

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator 
        initialRouteName="Loading"   
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Loading" component={SplashScreen} />
        <Stack.Screen name="Home" component={DrawerRoute} />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

