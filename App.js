import React from 'react';
import SplashScreen from './Screens/SplashScreen';
import { DrawerContent } from './Components/DrawerContent';
import CalculatorScreen from './Screens/CalculatorScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>

      <Stack.Navigator 
        initialRouteName="Loading"   
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Loading" component={SplashScreen} />
        <Stack.Screen name="Home" component={CalculatorScreen} />
      </Stack.Navigator>

    </NavigationContainer>
  )
};

