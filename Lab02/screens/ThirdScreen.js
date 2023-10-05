import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Pressable,TouchableOpacity,TextInput } from 'react-native';
import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import Checkbox from 'expo-checkbox';
import { BlurView } from 'expo-blur';


const ThirdScreen = props => {      
    const [isChecked1, setChecked1] = useState(false);
    const [isChecked2, setChecked2] = useState(false);
    const [isChecked3, setChecked3] = useState(false);
    const [isChecked4, setChecked4] = useState(false);

    const {navigation, route} = props;
    const {navigate, goBack} = navigation;
    return (
        
        <BlurView intensity={100} tint='dark' style={styles.wrap}>
            <View style={styles.container}>
                <Text style={[styles.header]} >PASSWORD</Text>
                <Text style={[styles.header]} >GENERATOR</Text>
                
                <TextInput style={styles.input} placeholder="" />
                
                <View style={styles.condition}>
                    <Text style={styles.text}>Password length</Text>
                    <TextInput style={styles.inputLength} placeholder="" />
                </View>

                <View style={styles.condition}>
                    <Text style={styles.text}>Include lower case letters</Text>
                    <Checkbox
                        style={styles.checkbox}
                        value={isChecked1}
                        onValueChange={setChecked1}
                    />
                </View>
                <View style={styles.condition}>
                    <Text style={styles.text}>Include upcase letters</Text>
                    <Checkbox
                        style={styles.checkbox}
                        value={isChecked2}
                        onValueChange={setChecked2}
                    />
                </View>
                 <View style={styles.condition}>
                    <Text style={styles.text}>Include number</Text>
                    <Checkbox
                        style={styles.checkbox}
                        value={isChecked3}
                        onValueChange={setChecked3}
                    />
                </View>
                 <View style={styles.condition}>
                    <Text style={styles.text}>Include special symbol</Text>
                    <Checkbox
                        style={styles.checkbox}
                        value={isChecked4}
                        onValueChange={setChecked4}        
                    />
                </View>

                <TouchableOpacity onPress={() => {navigate('FourthScreen')}}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>GENERATE PASSWORD</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </BlurView>
    );
}

export default ThirdScreen;

const styles = StyleSheet.create({
    container: {
        height: 650,
        width: 300,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#23235b',
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: "auto",
        marginBottom: "auto",
        borderRadius: 20,
    },
    wrap: {
        width: '100%',
        height: '100%',
        backgroundColor: '#23235b',
    },
    
    header: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff',
    },
    input: {
        width: "80%",
        height: 40,
        paddingLeft: 10,
        marginBottom: 30,
        marginTop: 50,
        backgroundColor: '#151537',
        borderRadius: 5,
        color: '#fff',
    },

    condition: {
        display: 'flex',
        flexDirection: 'row',
        height: 30,
        justifyContent: 'space-between',
        width: "80%",
        marginBottom: 30,
        alignItems: 'center',
    },
    inputLength: {
        width: 50,
        height: 30,
        backgroundColor: '#151537',
        borderRadius: 5,
        color: '#fff',
    },
    text: {
        fontSize: 17,
        color: '#fff',
    },

    checkbox: {
        alignSelf: 'center',
    },

    button: {
        backgroundColor: '#4630EB',
        marginTop: 10,
        borderRadius: 10,
        width: '80%',
        fontWeight: '500',
    },
    buttonText: {
        color: '#fff',
        fontSize: 17,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 15,
    },
});
