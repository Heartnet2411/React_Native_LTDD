import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";
import { add, sub, mul, div } from "../rtk/calculateSlice";
import { useDispatch, useSelector } from "react-redux";


export default function CalculateRtk({data}) {
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(0);
    const calculator = useSelector(state => state.calculator.result);
    const dispatch = useDispatch();
    return (
        <View style={styles.container}>
            <TextInput style={{width: '80%', height: 40, marginBottom: 20, backgroundColor: '#fff'}} placeholder="value1"
            onChangeText={setValue1}></TextInput>
            <TextInput style={{width: '80%', height: 40, backgroundColor: '#fff'}} placeholder="value2"
            onChangeText={setValue2}></TextInput>
            <View style={{width: '80%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', marginTop: 20}}>
                <Button title="+" onPress={() => {dispatch(add({value1:Number(value1), value2: Number(value2)})); console.log(calculator)}}>
                </Button>
                <Button title="-" onPress={() => {dispatch(sub({value1:Number(value1), value2: Number(value2)}));}}>
                </Button>
                <Button title="*" onPress={() => {dispatch(mul({value1:Number(value1), value2: Number(value2)}));}}>
                </Button>
                <Button title="/" onPress={() => {dispatch(div({value1:Number(value1), value2: Number(value2)}));}}>
                </Button>
            </View>
            <View style={{marginTop: 20}}>
                <Text>Result: {calculator}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0'
    }
})
