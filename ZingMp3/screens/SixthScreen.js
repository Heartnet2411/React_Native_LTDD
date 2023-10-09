import { StyleSheet, Text, View, Image, Button, Pressable,TouchableOpacity,TextInput } from 'react-native';
import * as React from 'react';

const SixthScreen = props => {    

    const {navigation, route} = props;
    const {navigate, goBack} = navigation;
    return (
            <View style={styles.container}>
                <Text style={[styles.header]} >Login</Text>
                <TextInput style={styles.input} placeholder="Name" />
                <TextInput style={styles.input} placeholder="Phone" />
                <TextInput style={styles.input} placeholder="Email" />
                <View style={styles.password}>
                    <TextInput style={[styles.input]} placeholder="Password" />
                    <Image source={require('../assets/eye.png')} style={styles.icon}/>
                </View>
                <TextInput style={styles.input} placeholder="Birthday" />

                <TouchableOpacity onPress={() => {navigate('SeventhScreen')}}>
                    <View style={styles.registerButton}>
                        <Text style={styles.buttonText}>REGISTER</Text>
                    </View>
                </TouchableOpacity>
                <Text style={styles.text}>When you agree to terms and conditions</Text>
            </View>
    );
}

export default SixthScreen;

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
        marginBottom: 20,
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
    registerButton: {
        backgroundColor: '#c34e3b',
        width: 300,
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        marginTop: 20,
    },
    text: {
        fontSize: 15,
        width: 300,
        textAlign: 'center',
        marginTop: 20,
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
    button: {
        marginTop: 10,
        width: 100,
        fontWeight: '500',
    },
});
