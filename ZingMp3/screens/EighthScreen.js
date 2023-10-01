import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Pressable,TouchableOpacity,TextInput } from 'react-native';
import * as React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

const EighthScreen = props => {    

    const {navigation, route} = props;
    const {navigate, goBack} = navigation;
    return (
        <View style={styles.wrap}>  
            <View style={styles.container}>
                <Image source={require('../assets/Logo.png')} style={styles.icon}/>
                <View style={styles.inputView}>
                    <Image source={require('../assets/user.png')} style={styles.iconInf}/>
                    <TextInput style={styles.input} placeholder="Please input user name" />
                </View>
                 <View style={styles.inputView}>
                    <Image source={require('../assets/lock.png')} style={styles.iconInf}/>
                    <TextInput style={styles.input} placeholder="Please input password" />
                </View>

                <TouchableOpacity onPress={() => {navigate('EighthScreen')}}>
                    <View style={styles.loginButton}>
                        <Text style={styles.buttonText}>Login</Text>
                    </View>
                </TouchableOpacity>

                <View style={styles.other}>
                    <Text style={styles.text}>Register</Text>
                    <Text style={styles.text}>Forgot password</Text>
                </View>

                <View style={styles.other2}>
                    <Image source={require('../assets/line.png')} style={styles.line}/>
                    <Text style={styles.text2}>Other Login Methods</Text>
                    <Image source={require('../assets/line.png')} style={styles.line}/>
                </View>

                <View style={styles.buttonView}>
                    <Pressable style={[styles.button,]}>
                        <Image source={require('../assets/add.png')} style={styles.loginAs}/>
                    </Pressable>
                    <Pressable style={[styles.button, ]} onPress={() => alert("Hello")}>
                        <Image source={require('../assets/wifi.png')} style={styles.loginAs}/>
                    </Pressable>
                    <Pressable style={[styles.button, ]} onPress={() => alert("Hello")}>
                        <Image source={require('../assets/facebook.png')} style={styles.loginAs}/>
                    </Pressable>
                </View>
            </View>
        </View>
    );
}

export default EighthScreen;

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
    icon: {
        width: 170,
        height: 170,
        marginBottom: 50,
    },
    inputView: {
        display: 'flex',
        flexDirection: 'row',
        width: 300,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        marginBottom: 20,
    },
    input: {
        height: 50,
        paddingLeft: 10,
        flex: 1,
        fontSize: 17,
    },

    loginButton: {
        backgroundColor: '#386ffc',
        width: 300,
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        marginTop: 20,
    },
    buttonText: {   
        fontSize: 20,
        color: '#fff',
    },

    other: {   
        display: 'flex',
        flexDirection: 'row',
        width: 300,
        justifyContent: 'space-between',
        marginBottom: 20,
    },

    other2: {
        display: 'flex',
        flexDirection: 'row',
        width: 300,
        marginTop: 20,
    },
    line: {
        height: 1,
        alignSelf: 'center',
        flex: 1,
    },

    text: {
        fontSize: 17,
        color: '#000',
    },
    text2: {
        fontSize: 17,
        color: '#000',
        margin: 10,
    },

    iconInf: {  
        width: 40,
        height: 40,
        marginRight: 10,
    },

    buttonView: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 300,
        marginTop: 20,
    },
    loginAs: {
        width: 70,
        height: 70,
        borderRadius: 15,
    },

});
