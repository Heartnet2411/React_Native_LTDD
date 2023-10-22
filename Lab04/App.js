import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Pressable } from 'react-native';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { ListItem1, ListItem2 } from './screens';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator  initialRouteName="ListItem1" screenOptions={{headerShown: false,}}>
        <Stack.Screen name="ListItem1" component={ListItem1}/>
        <Stack.Screen name="ListItem2" component={ListItem2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

