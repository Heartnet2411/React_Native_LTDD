import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import { useState } from 'react';

function CheckOut ({ route, navigation }) {  
  const vsmartTrang = require('../assets/vsmart-trang.jpg');
  const vsmartDen = require('../assets/vsmart-den.jpg');
  const vsmartDo = require('../assets/vsmart-do.jpg');
  const vsmartXanh = require('../assets/vsmart-xanh.jpg');
  const { name, price } = route.params;
  const [color, setColor] = useState('Đen');
  const [backGround, setBackGround] = useState(vsmartDen);

  return (  
      <View style={styles.container}>
        <View style={styles.product}>
          <Image source={backGround}  style={styles.productImage}/>
          <View style={styles.productInfo}>
            <View style={styles.name}>
              <Text style={styles.productName}>{JSON.stringify(name).replace('"','')}</Text>
            </View>
            <View style={styles.textWrap}>
              <Text style={styles.color}>Màu: </Text>
              <Text style={styles.colorBold}>{color} </Text>
            </View>
            <View style={styles.textWrap}>
              <Text style={styles.provider}>Cung cấp bởi</Text>
              <Text style={styles.providerBold}> Tiki Tradding</Text>
            </View>
            <Text style={styles.price}>{JSON.stringify(price).replace('"','')}</Text>
          </View>
        </View>
        <View style={styles.colorPicker}>
          <Text style={styles.colorPickerText}>Chọn một màu bên dưới</Text>
          <View style={styles.colorPickerWrap}>
            <TouchableOpacity style={styles.colorPickerButtonWhite} onPress={() => {setColor("Trắng"); setBackGround(vsmartTrang)}} >
              
            </TouchableOpacity>
            <TouchableOpacity style={styles.colorPickerButtonRed} onPress={() => {setColor("Đỏ"); setBackGround(vsmartDo)}}>

            </TouchableOpacity>
            <TouchableOpacity style={styles.colorPickerButtonBlack} onPress={() => {setColor("Đen"); setBackGround(vsmartDen)}}>

            </TouchableOpacity>
            <TouchableOpacity style={styles.colorPickerButtonBlue} onPress={() => {setColor("Xanh"); setBackGround(vsmartXanh)}}>

            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.buy}>
          <TouchableOpacity style={styles.buyButton} onPress={() => {navigation.navigate('CheckOut', {
                        image: backGround,
            })}}>
            <Text style={styles.buyText}>
              CHỌN MUA
            </Text>
          </TouchableOpacity>
        </View>
      </View>
  );
}

export default CheckOut;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    width: windowWidth,
    height: windowHeight,
  },

  product: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingBottom: 20,
    paddingTop: 20,
    height: 'auto',
  },
  productInfo: {
    flexGrow: 1,  
  },
  name: {
    flexDirection: 'row',
    marginRight: 10,
  },
  productName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    flex: 1,
  },
  textWrap: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  color: {
    fontSize: 17,
    color: '#000',
  },
  colorBold: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#000',
  },
  provider: {
    fontSize: 17,
    color: '#000',
  },
  providerBold: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#000',
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  productImage:{
    width: 200,
    height: 200,
    borderRadius: 10,
  },

  colorPicker: {
    backgroundColor: '#ccc',
    flex: 1,
    paddingBottom: 50,
  },
  colorPickerText: {
    fontSize: 17,
    color: '#000',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 20,
  },
  colorPickerWrap: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '100%',
  },
  colorPickerButtonWhite: {
    backgroundColor: '#fff',
    width: 80,
    height: '20%',
  },
  colorPickerButtonRed: {
    backgroundColor: '#ff0000',
    width: 80,
    height: '20%',
  },
  colorPickerButtonBlack: {
    backgroundColor: '#000',
    width: 80,
    height: '20%',
  },
  colorPickerButtonBlue: {
    backgroundColor: '#134fec',
    width: 80,
    height: '20%',
  },

  buy: {
    backgroundColor: '#ccc',
    justifyContent: 'flex-end',
  },
  buyButton: {
    backgroundColor: '#134fec',
    width: '80%',
    height: 50,
    marginBottom: 50,
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  buyText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
});
