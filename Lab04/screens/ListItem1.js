
import { StyleSheet, Text, View, Dimensions, Image, Pressable,ScrollView,TouchableOpacity } from 'react-native';

const DATA = [
  {
    Id: 1,
    Image: require("../assets/fan.jpg"),
    Name: 'Iphone 15 Pro Max',
    ShopName: 'Shop Iphone',
  },
  {
    Id: 2,
    Image: require("../assets/Iphone15.jpg"),
    Name: 'Áo thun trơn',
    ShopName: 'Shop Iphone',
  },
  {
    Id: 3,
    Image: require("../assets/fan.jpg"),
    Name: 'Áo thun trơn',
    ShopName: 'Shop Iphone',
  },
  {
    Id: 4,
    Image: require("../assets/fan.jpg"),
    Name: 'Áo thun trơn',
    ShopName: 'Shop Iphone',
  },
  {
    Id: 5,
    Image: require("../assets/fan.jpg"),
    Name: 'Áo thun trơn',
    ShopName: 'Shop Iphone',
  },
  {
    Id: 6,
    Image: require("../assets/fan.jpg"),
    Name: 'Áo thun trơn',
    ShopName: 'Shop Iphone',
  },
  {
    Id: 7,
    Image: require("../assets/fan.jpg"),
    Name: 'Áo thun trơn',
    ShopName: 'Shop Iphone',
  },
  {
    Id: 8,
    Image: require("../assets/fan.jpg"),
    Name: 'Áo thun trơn',
    ShopName: 'Shop Iphone',
  },
  {
    Id: 9,
    Image: require("../assets/fan.jpg"),
    Name: 'Áo thun trơn',
    ShopName: 'Shop Iphone',
  },
  {
    Id: 10,
    Image: require("../assets/fan.jpg"),
    Name: 'Áo thun trơn',
    ShopName: 'Shop Iphone',
  },
]


function ListItem1 ({route, navigation }) {
  return (
    <View  style={styles.container}>

      <View style={styles.chat}>
        <Text style={styles.chatText}>Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngại chat với shop</Text>
      </View>

      <ScrollView style={styles.listWrap}>
        {DATA.map((item) => (
          <View key={item.Id} style={styles.product}>
            <Image style={styles.productImage} source={item.Image} />
            <View style={styles.productInfo}>
              <Text style={styles.productName}>{item.Name}</Text>
              <View style={styles.shopInfo}>
                <Text style={styles.shop}>Shop </Text>
                <Text style={styles.shopName}>{item.ShopName}</Text>
              </View>
            </View>
            <View style={styles.buy}>
              <TouchableOpacity style={styles.buyButton} onPress={() => {navigation.navigate('ListItem2')}}>
                <View>
                    <Text style={styles.buyText}>Chat</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>      

      <View style={styles.footer}></View>
    </View>
  );
}

export default ListItem1;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    height: windowHeight,
    backgroundColor: '#fff',
    position: 'relative'
  },

  chat: {
    width: '100%',
    height: 'auto',
    backgroundColor: '#ccc',
    marginTop: 0,
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
