import { StyleSheet, Text, View, Image, Button, Pressable, TouchableOpacity } from 'react-native';
import * as React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

const SecondScreen = props => {    

    const {navigation, route} = props;
    const {navigate, goBack} = navigation;
    return (
        <LinearGradient
        // Background Linear Gradient
        colors={["#fff", "#25d2f8"]}
        style={styles.background}
        > 
            <View style={styles.container}>
                <Image
                source={require('../assets/Logo.png')}
                style={{width: 200, height: 200}}
                />
                <Text style={[styles.title, styles.titleHead]} >GROW</Text>
                <Text style={styles.title}>YOUR BUSINESS</Text>
                <Text style={styles.text}>We will help you to grow your business using online server</Text>
                <View style={styles.buttonView}>
                    <Pressable style={styles.button}>
                        <Text style={styles.buttonText}>Login</Text>
                    </Pressable>
                    <Pressable style={styles.button} onPress={() => alert("Hello")}>
                        <Text style={styles.buttonText}>Sign up</Text>
                    </Pressable>
                
                </View>
                <TouchableOpacity onPress={() => {navigate('ThirdScreen')}}>
                    <View>
                        <Text style={styles.title2}>HOW WE WORK?</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    );
}

export default SecondScreen;

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
    title: {
        fontSize: 35,
        fontWeight: 'bold',
        color: '#000',
    }, 
    title2: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        marginTop: 20,
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
