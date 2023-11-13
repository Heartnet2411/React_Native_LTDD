import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { First, Add, Todos } from './screens';
import { View, Image, Text } from 'react-native';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="First" >
        <Stack.Screen name="First" component={First} options={{headerShown: false}}/>
        <Stack.Screen name="Todos" component={Todos} options={({ route }) => ({
          headerTitle: '',
          headerRight: () => (
            <View style={{marginRight: 20, flexDirection: 'row', justifyContent:'center', alignItems:'center'}}>
              <Image style={{width: 40, height: 40,borderRadius:50, borderColor:'#ccc',borderWidth:1}} source={require('./assets/user.png')} />
              <View style={{alignItems:'center',marginLeft: 20}}>
                <Text style={{fontSize:20,fontWeight:'bold'}}>Hi {route.params.name}</Text>
                <Text style={{fontSize:16}}>Have a great day ahead</Text>
              </View>
            </View>
          ),
          headerStyle: {
            borderWidth: 0,
            
          },
        })} />
        <Stack.Screen name="Add" component={Add} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;