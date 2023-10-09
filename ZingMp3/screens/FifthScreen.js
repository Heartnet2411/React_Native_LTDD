import { StyleSheet, Text, View, Image, Button, Pressable,TouchableOpacity,TextInput  } from 'react-native';
import * as React from 'react';

const FifthScreen = props => {    

    const {navigation, route} = props;
    const {navigate, goBack} = navigation;
    return (    
            <View style={styles.container}>
                <Text style={[styles.header]} >Login</Text>
                <TextInput style={styles.input} placeholder="Email" />
                <View style={styles.password}>
                    <TextInput style={[styles.input]} placeholder="Password" />
                    <Image source={require('../assets/eye.png')} style={styles.icon}/>
                </View>
                <TouchableOpacity onPress={() => {navigate('SixthScreen')}}>
                    <View style={styles.loginButton}>
                        <Text style={styles.buttonText}>Login</Text>
                    </View>
                </TouchableOpacity>
                <Text style={styles.text}>When you agree to terms and conditions</Text>
                <Text style={styles.textLink}>Forgot Password?</Text>
                <Text style={styles.text}>Or login with</Text>
                <View style={styles.buttonView}>
                    <Pressable style={[styles.button,]}>
                        <Image source={require('../assets/facebook.png')} style={styles.loginAs}/>
                    </Pressable>
                    <Pressable style={[styles.button, ]} onPress={() => alert("Hello")}>
                        <Image source={require('../assets/zing.png')} style={styles.loginAs}/>
                    </Pressable>
                    <Pressable style={[styles.button, ]} onPress={() => alert("Hello")}>
                        <Image source={require('../assets/google.png')} style={styles.loginAs}/>
                    </Pressable>
                </View>
            </View>
    );
}

export default FifthScreen;

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
    header: {
        fontSize: 50,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 70,
    },
    input: {
        width: 300,
        height: 50,
        borderRadius: 10,
        paddingLeft: 10,
        marginBottom: 30,
        backgroundColor: '#ccc',
    },
    password: {
        position: 'relative',
    },
    icon: {
        position: 'absolute',
        top: 10,
        right: 10,
        width: 30,
        height: 30,
    },
    loginButton: {
        backgroundColor: '#c34e3b',
        width: 300,
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    text: {
        fontSize: 15,
        width: 300,
        textAlign: 'center',
        marginTop: 20,
    },
    textLink: {
        fontSize: 15,
        width: 300,
        textAlign: 'center',
        marginTop: 20,
        color: '#3a559f',
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
        textAlign: 'center',
        padding: 10,
    },
    buttonView: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 40,
    },
    // backgroundFb: {
    //     backgroundColor: '#3a559f',
    // },
    // backgroundZing: {
    //     backgroundColor: '#1a75a7',
    // },
    // backgroundGg: {
    //     backgroundColor: '#fff',
    // },
    button: {
        marginTop: 10,
        width: 100,
        fontWeight: '500',
    },
    loginAs: {
        width: 50,
        height: 50,
        alignItems: 'center',
        alignSelf: 'center',
    },
});
