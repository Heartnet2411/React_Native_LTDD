import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Pressable,TouchableOpacity,TextInput } from 'react-native';
import * as React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

const ThirdScreen = props => {    

    const {navigation, route} = props;
    const {navigate, goBack} = navigation;
    return (
        <LinearGradient
        // Background Linear Gradient
        colors={["#fff", "#25d2f8"]}
        style={styles.background}
        >
        <View style={styles.wrap}>
            
            <View style={styles.container}>
                <Image
                source={require('../assets/password.png')}
                style={{width: 200, height: 200}}
                />
                <Text style={[styles.title, styles.titleHead]} >FORGET</Text>
                <Text style={styles.title}>PASSWORD</Text>
                <Text style={styles.text}>Provide your account’s email for which you want to reset your password</Text>
                <View style={styles.inputView}>
                    <TextInput style={styles.input} placeholder="Email" />
                
                </View>
                <TouchableOpacity onPress={() => {navigate('FourthScreen')}}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>NEXT</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
        </LinearGradient>
    );
}

export default ThirdScreen;

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    wrap: {
        flex: 1,
    },
    title: {
        fontSize: 35,
        fontWeight: 'bold',
        color: '#000',
    }, 
    titleHead: {
        marginTop: 20,
    },
    text: {
        fontSize: 15,
        width: 300,
        textAlign: 'center',
        marginTop: 50,
    },
    inputView: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: 300,
        marginTop: 10,
    },
    button: {
        backgroundColor: '#000',
        marginTop: 30,
        borderRadius: 10,
        width: 300,
        fontWeight: '500',
    }, 
    buttonText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 10,
    },
    input: {
        height: 40,
        width: 300,
        margin: 15,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        marginTop: 20,
      },
});
