import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View, Image, TextInput, Touchable, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';

const First = ({navigation}) => {
  const [textInput, setTextInput] = useState("")
  
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={require('../assets/todo1.png')} />
      <Text style={styles.heading}>
        MANAGE YOUR TASKS
      </Text>
      <View style={styles.inputView}>
        <Image style={styles.icon} source={require('../assets/user.png')}/>
        <TextInput style={styles.input} placeholder='Enter your name' onChange={event => setTextInput(event.target.value)}/>
      </View>
      <TouchableOpacity style={styles.buttonView} onPress={() => navigation.navigate('Todos', {name: textInput})}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>
            Get Started
          </Text>
          <Image style={styles.buttonIcon} source={require('../assets/right.png')}/>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default First;

const screenWidth = Dimensions.get("screen").width;
const screenHeight = Dimensions.get("screen").height;

const styles = StyleSheet.create({
  container: {
    width: screenWidth,
    height: screenHeight,
    backgroundColor: '#fff',
  },
  image: {
    width: 250,
    height: 250,
    alignSelf: 'center',
    marginTop: 50,
  },
  heading: {
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 30,
    width: '70%',
    alignSelf: 'center',
  },
  inputView: {
    flexDirection: 'row',
    marginTop: 50,
    marginHorizontal: 30,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
  },
  icon: {
    width: 25,
    height: 25,
    marginLeft: 10,
  },
  input: {
    flex: 1,
    height: 50,
    marginLeft: 10,
    fontSize: 17,
  },
  buttonView: {
    marginTop: 50,
    marginHorizontal: 30,
    alignItems: 'center',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1ba9ff',
    borderRadius: 10,
    height: 50,
    width: '60%'
  },
  buttonText: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonIcon: {
    width: 20,
    height: 20,
    marginLeft: 20
  },

});
