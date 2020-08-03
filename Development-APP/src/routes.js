import React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

import PagRegister from './pages/Register/index';
import PagLogin from './pages/Login/index'
import PagMain from './pages/Main/index'
export default function Mystack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Register" options={{headerShown: false}} component={PagRegister} />
        <Stack.Screen name="Login" options={{headerShown: false}} component={PagLogin} />
        <Stack.Screen name="Main" options={{headerShown: false}} component={PagMain} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
