import React from 'react';
import { View, StyleSheet, Text, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { connect } from 'react-redux';

const BlockC = ({ count, increment, decrement }) => {
    return (
        <View style={styles.container}>
        <Pressable style={{width: 'auto', height: 'auto'}} onPress={
            () => {
                decrement();
            }
        }>
            <AntDesign name="minuscircleo" size={30} color="black" />
        </Pressable>
        <View style={styles.block}>
            <Text style={styles.text}>{count}</Text>
        </View>
        <Pressable style={{width:'auto', height:'auto'} }
        onPress={
            () => {
                increment();
            }    
        }>
            <AntDesign name="pluscircleo" size={30} color="black" />
        </Pressable>
        
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
        width: '80%',
        height: 100,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 30,
    },
    block: {
        width: 50,
        height: 50,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 30,
    },
    text: {
        fontSize: 20,
    },
});

function mapToStateProps(state) {
  return {
    count: state.count
  }
}

function mapToDispatchProps(dispatch) {
  return {
    increment: () => dispatch({ type: 'INCREMENT' }),
    decrement: () => dispatch({ type: 'DECREMENT' })
  }
}

export default connect(mapToStateProps, mapToDispatchProps)(BlockC);