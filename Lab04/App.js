import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Pressable, TextInput } from 'react-native';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { ListItem1, ListItem2 } from './screens';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator  initialRouteName="ListItem1" options={{
            headerRight: () => (
              <Pressable style={{width: 80, height: 80}}>
                <Image source={require('./assets/shopping-cart.png')} style={{width: 70, height: 70}}/>
              </Pressable>
            ),
            headerStyle: {backgroundColor: '#1ba9ff'},
          }}>
        <Stack.Screen name="ListItem1" component={ListItem1} options={{
            headerTitle: 'First Screen',
            headerRight: () => (
              <Pressable style={{width: 25, height: 25}}>
                <Image source={require('./assets/shopping-cart.png')} style={{width: 25, height: 25}}/>
              </Pressable>
            ),
            headerStyle: {backgroundColor: '#1ba9ff'},
          }}/>
        <Stack.Screen name="ListItem2" component={ListItem2} options={{
            headerTitle: () => {
              return (
                <View style={{flexDirection: 'row', alignItems: 'center',height:30, width:'auto', backgroundColor:'#fff'}}>
                  <Image source={require('./assets/search.png')} style={{width: 23, height: 23, marginLeft:10}}/>
                  <TextInput style={{width: 150, height: 30, marginLeft: 10, backgroundColor: '#fff', borderRadius: 5}}/>
                </View>
              )
            },
            headerRight: () => (
              <View style={{flexDirection: 'row', alignItems: 'center',height:30, alignItems:'center'}}>
                <Pressable style={{width: 25, height: 25}}>
                  <Image source={require('./assets/shopping-cart.png')} style={{width: 25, height: 25}}/>
                </Pressable>
                <Pressable style={{width: 25, height: 25}}>
                  <Image source={require('./assets/3dot.png')} style={{width: 21, height: 21, alignSelf:'center', marginLeft:20,justifyContent:'center'}}/>
                </Pressable>
              </View>
            ),
            headerStyle: {backgroundColor: '#1ba9ff'},
          }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

