
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './rtk/store';
import CalculateRtk from './components/calculateRtk';
//import { store } from './redux/store';
//import Calculate from './components/calculate';

export default function App() {
  return (
    // <Provider store={store}>
    //   <Calculate></Calculate>
    // </Provider>
    <Provider store={store}>
        <CalculateRtk></CalculateRtk>
    </Provider>
  );
}

