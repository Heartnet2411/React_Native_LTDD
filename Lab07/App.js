
import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native';
import BlockA from './component/BlockA';
import BlockB from './component/BlockB';
import BlockC from './component/BlockC';
import { Provider } from 'react-redux';
import Counter from './Counter';


import store from './redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
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
