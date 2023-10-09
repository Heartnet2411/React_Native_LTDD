import { StyleSheet, Text, View, Image, Button, Pressable, TouchableOpacity,TextInput } from 'react-native';
import * as React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

const FourthScreen = props => {    

    const {navigation, route} = props;
    const {navigate, goBack} = navigation;
    return (
        <LinearGradient
        // Background Linear Gradient
        colors={["#fff", "#25d2f8"]}
        style={styles.background}
        >
            
            <View style={styles.container}>
                <Text style={[styles.header]} >CODE</Text>
                <Text style={[styles.title, styles.titleHead]} >VERIFICATION</Text>
                <Text style={styles.text}>Enter ontime password sent on +849092605798</Text>
                <View style={styles.inputView}>
                    <TextInput style={styles.input} placeholder="" />
                    <TextInput style={styles.input} placeholder="" />
                    <TextInput style={styles.input} placeholder="" />
                    <TextInput style={styles.input} placeholder="" />
                    <TextInput style={styles.input} placeholder="" />
                    <TextInput style={styles.input} placeholder="" />
                </View>
                <TouchableOpacity onPress={() => {navigate('FifthScreen')}}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>VERIFI CODE</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    );
}

export default FourthScreen;

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
        fontSize: 70,
        fontWeight: '900',
        color: '#000',
    },
    title: {
        marginTop: 90,
        fontSize: 35,
        fontWeight: 'bold',
        color: '#000',
    }, 
    text: {
        fontSize: 15,
        width: 300,
        textAlign: 'center',
        marginTop: 20,
    },
    inputView: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: 300,
        marginTop: 10,
        display: 'flex',
    },
    button: {
        backgroundColor: '#000',
        marginTop: 50,
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
        width: 40,
        margin: 15,
        borderWidth: 2,
        padding: 10,
        borderRadius: 10,
        marginTop: 20,
      },
});
