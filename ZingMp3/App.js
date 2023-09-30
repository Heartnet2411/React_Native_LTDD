import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Pressable } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/native-stack';
import {FirstScreen, SecondScreen} from './screens';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator  initialRouteName="FirstScreen" screenOptions={{headerShown: false,}}>
        <Stack.Screen name="FirstScreen" component={FirstScreen}/>
        <Stack.Screen name="SecondScreen" component={SecondScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

