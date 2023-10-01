import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Pressable,TouchableOpacity,TextInput } from 'react-native';
import * as React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

const SeventhScreen = props => {    

    const {navigation, route} = props;
    const {navigate, goBack} = navigation;
    return (
        <LinearGradient
        // Background Linear Gradient
        colors={["#e3c000", "#fbcb00"]}
        style={styles.background}
        >
            <View style={styles.wrap}>
                <View style={styles.container}>
                    <Text style={[styles.header]} >Login</Text>
                    <View style={styles.name}>
                        <Image source={require('../assets/user.png')} style={styles.icon}/>
                        <TextInput style={styles.input} placeholder="Name" />
                    </View>
                    <View style={styles.password}>
                        <Image source={require('../assets/lock.png')} style={styles.icon2}/>
                        <TextInput style={[styles.input]} placeholder="Password" />
                        <Image source={require('../assets/eye.png')} style={styles.icon2}/>
                    </View>
                    <TouchableOpacity onPress={() => {navigate('EighthScreen')}}>
                        <View style={styles.loginButton}>
                            <Text style={styles.buttonText}>Login</Text>
                        </View>
                    </TouchableOpacity>
                    <Text style={styles.text}>CREATE ACCOUNT</Text>
                    
                </View>
            </View>
        </LinearGradient>
    );
}

export default SeventhScreen;

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
    header: {
        fontSize: 50,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 70,
        alignSelf: 'flex-start',
    },
    input: {
        width: 200,
        height: 50,
        paddingLeft: 10,
        marginBottom: 30,
        flex: 1,
    },
    name: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#debf3b',
        width: 300,
        height: 50,
        marginBottom: 30,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#fff',
        
    },  
    password: {
       display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#debf3b',
        width: 300,
        height: 50,
        marginBottom: 30,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#fff',
    },
    icon: {
        width: 30,
        height: 30,
        alignSelf: 'center',
        margin: 10,
    },
    icon2: {
        width: 30,
        height: 30,
        alignSelf: 'center',
        margin: 10,
    },
    loginButton: {
        backgroundColor: '#000',
        width: 300,
        height: 50,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    text: {
        color: '#000',
        fontSize: 20,
        textAlign: 'center',
        padding: 10,
        fontWeight: 'bold',
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
        textAlign: 'center',
        padding: 10,
    },
    
});
