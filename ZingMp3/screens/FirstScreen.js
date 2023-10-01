import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Pressable,TouchableOpacity } from 'react-native';
import * as React from 'react';


const FirstScreen = props => {
    const {navigation, route} = props;
    const {navigate, goBack} = navigation;
    return (
        <View style={styles.wrap}>
            <View style={styles.container}>
                <Image 
                source={require('../assets/Logo.png')}
                style={{width: 200, height: 200}}
                />
                <Text style={[styles.title, styles.titleHead]} >GROW</Text>
                <Text style={styles.title}>YOUR BUSINESS</Text>
                <Text style={styles.text}>We will help you to grow your business using online server</Text>
                <View style={styles.buttonView}>
                    <TouchableOpacity onPress={() => {navigate('SecondScreen')}}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>Login</Text>
                        </View>
                    </TouchableOpacity>
                    <Pressable style={styles.button} onPress={() => alert("Hello")}>
                        <Text style={styles.buttonText}>Sign up</Text>
                    </Pressable>
                </View>
        </View>
        </View>
    );
};

export default FirstScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
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
    buttonView: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: 300,
    },
    button: {
        backgroundColor: '#000',
        marginTop: 50,
        borderRadius: 10,
        width: 100,
        fontWeight: '500',
    }, 
    buttonText: {
        color: '#fff',
        fontSize: 20,
        textAlign: 'center',
        padding: 10,
    },
});
