import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { connect } from "react-redux";
import { store } from "../redux/store";
import { useState } from "react";
import { add, div, mul, sub } from "../redux/action";

function Calculate({data}) {
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(0);
    return (
        <View style={styles.container}>
            <TextInput style={{width: '80%', height: 40, marginBottom: 20, backgroundColor: '#fff'}} placeholder="value1"
            onChangeText={setValue1}></TextInput>
            <TextInput style={{width: '80%', height: 40, backgroundColor: '#fff'}} placeholder="value2"
            onChangeText={setValue2}></TextInput>
            <View style={{width: '80%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', marginTop: 20}}>
                <Button title="+" onPress={() => {store.dispatch(add(Number(value1), Number(value2)))}}>
                </Button>
                <Button title="-" onPress={() => {store.dispatch(sub(Number(value1), Number(value2)))}}>
                </Button>
                <Button title="*" onPress={() => {store.dispatch(mul(Number(value1), Number(value2)))}}>
                </Button>
                <Button title="/" onPress={() => {store.dispatch(div(Number(value1), Number(value2)))}}>
                </Button>
            </View>
            <View style={{marginTop: 20}}>
                <Text>Result: {data}</Text>
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
const mapsToProps = (state) => (
    {data: state.result}
)
export default connect(mapsToProps, null) (Calculate)