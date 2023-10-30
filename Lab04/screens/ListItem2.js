
import { StyleSheet, Text, View, Dimensions, Image, Pressable,ScrollView,TouchableOpacity } from 'react-native';

const DATA = [
  {
    Id: 1,
    Image: require("../assets/fan.jpg"),
    Name: 'Iphone 15 Pro Max',
    Price: '39.000 đ',
  },
  {
    Id: 2,
    Image: require("../assets/Iphone15.jpg"),
    Name: 'Áo thun trơn',
    Price: '39.000 đ',
  },
  {
    Id: 3,
    Image: require("../assets/fan.jpg"),
    Name: 'Áo thun trơn',
    Price: '39.000 đ',
  },
  {
    Id: 4,
    Image: require("../assets/fan.jpg"),
    Name: 'Áo thun trơn',
    Price: '39.000 đ',
  },
  {
    Id: 5,
    Image: require("../assets/fan.jpg"),
    Name: 'Áo thun trơn',
    Price: '39.000 đ',
  },
  {
    Id: 6,
    Image: require("../assets/fan.jpg"),
    Name: 'Áo thun trơn',
    Price: '39.000 đ',
  },
  {
    Id: 7,
    Image: require("../assets/fan.jpg"),
    Name: 'Áo thun trơn',
    Price: '39.000 đ',
  },
  {
    Id: 8,
    Image: require("../assets/fan.jpg"),
    Name: 'Áo thun trơn',
    Price: '39.000 đ',
  },
  {
    Id: 9,
    Image: require("../assets/fan.jpg"),
    Name: 'Áo thun trơn',
    Price: '39.000 đ',
  },
  {
    Id: 10,
    Image: require("../assets/fan.jpg"),
    Name: 'Áo thun trơn',
    Price: '39.000 đ',
  },
]


function ListItem2 ({route, navigation }) {
  return (
    <View  style={styles.container}>

        <ScrollView contentContainerStyle={styles.productWrap}>
            {DATA.map((item) => {
                return (
                    <View key={item.Id} style={styles.product}>
                        <Image source={item.Image} style={styles.productImage}/>
                        <Text style={styles.productName}>
                            {item.Name}
                        </Text>
                        <View style={styles.rating}>
                            <Image source={require('../assets/star.png')} style={styles.starImage}/>
                            <Image source={require('../assets/star.png')} style={styles.starImage}/>
                            <Image source={require('../assets/star.png')} style={styles.starImage}/>
                            <Image source={require('../assets/star.png')} style={styles.starImage}/>
                            <Image source={require('../assets/star.png')} style={styles.starImage}/>
                            <Text style={styles.ratingNumber}>
                                (15)
                            </Text>
                        </View>
                        <View style={styles.price}>
                            <Text style={styles.priceText}>
                                {item.Price}
                            </Text>
                            <Text style={styles.discount}>
                                39%
                            </Text>
                        </View>
                    </View>
                )
            })
            }
        </ScrollView>
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

    productWrap: {
        width: '100%',
        marginTop: 10,
        backgroundColor: '#fff',
        marginBottom: 60,
        flexGrow: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    product: {
        height: 'auto',
        backgroundColor: '#fff',
        marginBottom: 20,
        width: '45%',
        
    },
    productImage: {
        width: '100%',
        height: 150,
        objectFit: 'cover',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
    },
    productName: {
        fontSize: 20,
        marginTop: 5,
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
        width: 20,
        height: 20,
    },
    ratingNumber: {
        fontSize: 15,
        marginLeft: 10,
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
        color: '#000',
    },
    discount: {
        fontSize: 15,
        marginLeft: 10,
        alignSelf: 'center',
        color: '#ccc',
        textDecorationLine: 'line-through',
    },

});
