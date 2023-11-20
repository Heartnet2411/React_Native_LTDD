import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native';
import BlockA from './component/BlockA';
import BlockB from './component/BlockB';
import BlockC from './component/BlockC';
import { Provider, connect } from 'react-redux';
import store from './redux/store';


const Counter = ({ count, increment }) => {
  return (
    <View style={styles.container}>
      <BlockA />
      <BlockB />
      <BlockC />
    </View>
  );
}

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    width: screenWidth,
    height: screenHeight,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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

export default connect(mapToStateProps, mapToDispatchProps)(Counter);
