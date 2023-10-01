import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Pressable } from 'react-native';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {FirstScreen, SecondScreen, ThirdScreen, FourthScreen, FifthScreen, SixthScreen, SeventhScreen, EighthScreen} from './screens';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator  initialRouteName="FirstScreen" screenOptions={{headerShown: false,}}>
        <Stack.Screen name="FirstScreen" component={FirstScreen}/>
        <Stack.Screen name="SecondScreen" component={SecondScreen} />
        <Stack.Screen name="ThirdScreen" component={ThirdScreen} />
        <Stack.Screen name="FourthScreen" component={FourthScreen} />
        <Stack.Screen name="FifthScreen" component={FifthScreen} />
        <Stack.Screen name="SixthScreen" component={SixthScreen} />
        <Stack.Screen name="SeventhScreen" component={SeventhScreen} />
        <Stack.Screen name="EighthScreen" component={EighthScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

