import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Pressable } from 'react-native';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { CheckOut, ChooseColor } from './screen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator  initialRouteName="CheckOut" screenOptions={{headerShown: false,}}>
        <Stack.Screen name="CheckOut" component={CheckOut}/>
        <Stack.Screen name="ChooseColor" component={ChooseColor} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

