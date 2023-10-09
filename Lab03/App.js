import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {
  return (  
      <View style={styles.container}>
          <View>
              <Image source={require('./assets/vsmart-trang.jpg')}  style={styles.productImage}/>
          </View>
          <Text style={styles.productName}>
              Điện Thoại Vsmart Joy 3 - Hàng chính hãng
          </Text>
          <View style={styles.rating}>
              <View style={styles.ratingStar}>
                  <Image source={require('./assets/star.png')} style={styles.starImage}/>
                  <Image source={require('./assets/star.png')} style={styles.starImage}/>
                  <Image source={require('./assets/star.png')} style={styles.starImage}/>
                  <Image source={require('./assets/star.png')} style={styles.starImage}/>
                  <Image source={require('./assets/star.png')} style={styles.starImage}/>
              </View>
              <Text style={styles.text}> 
                (Xem 828 đánh giá)
              </Text>
          </View>
          <View style={styles.price}>
              <Text style={styles.priceText}>
                  1.790.000đ
              </Text>
              <Text style={styles.oldPrice}>
                  1.790.000đ
              </Text>
          </View>
          <View style={styles.refund}>
              <Text style={styles.refundText}>
                  Ở ĐÂU RẺ HƠN HOÀN TIỀN
              </Text>
              <Image source={require('./assets/ask.png')} style={styles.askIamge}/>
          </View>
          <View style={styles.selectColor}>
              <TouchableOpacity style={styles.selectColorButton}>
                  <Text style={styles.selectText}>
                      4 MÀU - CHỌN MÀU
                  </Text>
                  <Image source={require('./assets/right.png')} style={styles.arrowRight}/>
              </TouchableOpacity>
          </View>

          <View style={styles.buy}>
              <TouchableOpacity style={styles.buyButton}>
                  <Text style={styles.buyText}>
                      CHỌN MUA
                  </Text>
                  
              </TouchableOpacity>
          </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20,
    marginRight: 20,
  },

  productImage: {
    width: 300,
    height: 300,
    marginTop: 20,
    marginBottom: 20,
  },
  productName: {
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    alignSelf: 'flex-start',
  },

  rating: {
    flexDirection: 'row',
    marginBottom: 10,
    alignSelf: 'flex-start',
    justifyContent: 'center',

  },
  ratingStar: {
    flexDirection: 'row',
  },
  starImage: {
    width: 25,
    height: 25,
  },
  text: {
    marginLeft: 20,
    fontSize: 17,
    alignSelf: 'center',
  },

  price: {
    flexDirection: 'row',
    marginBottom: 10,
    alignSelf: 'flex-start',
    justifyContent: 'center',

  },
  priceText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'back',
    lineHeight: 20,
  },
  oldPrice: {
    fontSize: 17,
    marginLeft: 20,
    textDecorationLine: 'line-through',
    color: 'gray',
    lineHeight: 20,
  },

  refund: {
    flexDirection: 'row',
    marginBottom: 20,
    alignSelf: 'flex-start',
  },
  refundText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'red',
    lineHeight: 20,
  },
  askIamge: {
    width: 20,
    height: 20,
    marginLeft: 20,
  },

  selectColor: {
    flexDirection: 'row',
    marginBottom: 60,
  },
  selectColorButton: {
    position: 'relative',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    padding: 10,
    width: 350,
    alignSelf: 'center',
    justifyContent: 'center',
    shadowColor: 'gray',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowOffset: { width: 5, height: 5 },
  },
  selectText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black',

  },
  arrowRight: {
    position: 'absolute',
    right: 10,
    width: 20,
    height: 20,
    marginLeft: 20,
  },

  buy: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  buyButton: {
    position: 'relative',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 10,
    padding: 10,
    width: 350,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowOffset: { width: 5, height: 5 },
  },
  buyText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },

});
