
import { StyleSheet, Text, View, Dimensions, Image, Pressable,ScrollView,TouchableOpacity } from 'react-native';

const DATA = [
  {
    Id: 1,
    Image: require("../assets/fan.jpg"),
    Name: 'Iphone 15 Pro Max',
    Price: 39.000,
  },
  {
    Id: 2,
    Image: require("../assets/Iphone15.jpg"),
    Name: 'Áo thun trơn',
    Price: 39.000,
  },
  {
    Id: 3,
    Image: require("../assets/fan.jpg"),
    Name: 'Áo thun trơn',
    Price: 39.000,
  },
  {
    Id: 4,
    Image: require("../assets/fan.jpg"),
    Name: 'Áo thun trơn',
    Price: 39.000,
  },
  {
    Id: 5,
    Image: require("../assets/fan.jpg"),
    Name: 'Áo thun trơn',
    Price: 39.000,
  },
  {
    Id: 6,
    Image: require("../assets/fan.jpg"),
    Name: 'Áo thun trơn',
    Price: 39.000,
  },
  {
    Id: 7,
    Image: require("../assets/fan.jpg"),
    Name: 'Áo thun trơn',
    Price: 39.000,
  },
  {
    Id: 8,
    Image: require("../assets/fan.jpg"),
    Name: 'Áo thun trơn',
    Price: 39.000,
  },
  {
    Id: 9,
    Image: require("../assets/fan.jpg"),
    Name: 'Áo thun trơn',
    Price: 39.000,
  },
  {
    Id: 10,
    Image: require("../assets/fan.jpg"),
    Name: 'Áo thun trơn',
    Price: 39.000,
  },
]


function ListItem2 ({route, navigation }) {
  return (
    <View  style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.icon} source={require('../assets/back.png')} />
        <Text style={styles.headerText}>Chat</Text>
        <Image style={styles.icon} source={require('../assets/shopping-cart.png')} />
      </View>

      

      <View style={styles.footer}></View>
    </View>
  );
}

export default ListItem2;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    height: windowHeight,
    backgroundColor: '#fff',
    position: 'relative'
  },
  header: {
    position:'absolute',
    top: 0,
    width: '100%',
    height: 50,
    backgroundColor: '#1ba9ff',
    display: 'flex',
    flexDirection: 'row',
  },
  icon: {
    width: 30,
    height: 30,
    marginLeft: 20,
    marginRight: 20,
    margin: 10
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
    flex: 1,
    textAlign: 'center'
  },

  chat: {
    width: '100%',
    height: 'auto',
    backgroundColor: '#ccc',
    marginTop: 50,
  },
  chatText: {
    color: '#000',
    fontSize: 17,
    paddingTop: 15,
    paddingBottom: 15,
    marginLeft: 30,
    marginRight: 30,
    lineHeight: 20
  },

  listWrap: {
    width: 'auto',
    height: 'auto',
    marginBottom: 50,
  },

  product: {
    width: '100%',
    height: 'auto',
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderTopColor: '#ccc',
    borderTopWidth: 1,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  productImage: {
    width: 100,
    height: 100,
    objectFit: 'cover',
    marginLeft: 10, 
    marginRight: 10,
    borderRadius: 5,
  },
  productInfo: {
    flex: 1,
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  shopInfo: {
    display: 'flex',
    flexDirection: 'row',
  },
  shop: {
    fontSize: 16,
    color: '#ccc',
  },
  productName: {
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  shopName: {
    fontSize: 16,
    color: '#fa492c',
  },
  buy: {
    width: 100,
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  buyButton: {
    width: 80,
    height: 40,
    backgroundColor: '#fa492c',
    borderRadius: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buyText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },


  footer: {
    position:'absolute',
    bottom: 0,
    width: '100%',
    height: 50,
    backgroundColor: '#1ba9ff'
  }
});
