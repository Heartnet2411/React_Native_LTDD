
import { StyleSheet, Text, View, Dimensions, Image, Pressable,FlatList } from 'react-native';

const DATA = [
  {
    Image: 'require("./assets/back.png")',
    Name: 'Iphone 15 Pro Max',
    ShopName: 'Shop Iphone',
  },
  {
     Image: 'require("./assets/back.png")',
    Name: 'Áo thun trơn',
    ShopName: 'Shop Iphone',
  },
  {
     Image: 'require("./assets/back.png")',
    Name: 'Áo thun trơn',
    ShopName: 'Shop Iphone',
  },
  {
     Image: 'require("./assets/back.png")',
    Name: 'Áo thun trơn',
    ShopName: 'Shop Iphone',
  },
  {
    Image: 'require("./assets/back.png")',
    Name: 'Áo thun trơn',
    ShopName: 'Shop Iphone',
  },
]

const Item = ({ Name, Image, ShopName }) => (
  <View style={styles.item}>
    <Image style={styles.image} source={Image} />
    <View style={styles.itemContent}>
      <Text style={styles.itemName}>{Name}</Text>
      <Text style={styles.itemShopName}>{ShopName}</Text>
    </View>
    <Pressable style={styles.itemButton}>
      <Text style={styles.itemButtonText}>Chat</Text>
    </Pressable>
  </View>
);


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.icon} source={require('./assets/back.png')} />
        <Text style={styles.headerText}>Chat</Text>
        <Image style={styles.icon} source={require('./assets/shopping-cart.png')} />
      </View>

      <View style={styles.chat}>
        <Text style={styles.chatText}>Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngại chat với shop</Text>
      </View>

      <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.Name, item.Image, item.ShopName} />}
      />

      <View style={styles.footer}></View>
    </View>
  );
}


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

  footer: {
    position:'absolute',
    bottom: 0,
    width: '100%',
    height: 50,
    backgroundColor: '#1ba9ff'
  }
});
