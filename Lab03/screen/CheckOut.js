import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions} from 'react-native';
import { useEffect, useState } from 'react';
import React from 'react';

function CheckOut ({route, navigation }) {  
    const image = route.params?.image;
    React.useEffect(() => { }, );
    return (  
        <View style={styles.wrap}>
            <View style={styles.container}>
                <View>
                    <Image source={image ? image : require('../assets/vsmart-trang.jpg')}  style={styles.productImage}/>
                </View>
                <Text style={styles.productName}>
                    Điện Thoại Vsmart Joy 3 - Hàng chính hãng
                </Text>
                <View style={styles.rating}>
                    <View style={styles.ratingStar}>
                        <Image source={require('../assets/star.png')} style={styles.starImage}/>
                        <Image source={require('../assets/star.png')} style={styles.starImage}/>
                        <Image source={require('../assets/star.png')} style={styles.starImage}/>
                        <Image source={require('../assets/star.png')} style={styles.starImage}/>
                        <Image source={require('../assets/star.png')} style={styles.starImage}/>
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
                    <Image source={require('../assets/ask.png')} style={styles.askIamge}/>
                </View>
                <View style={styles.selectColor}>
                    <TouchableOpacity style={styles.selectColorButton} onPress={() => {navigation.navigate('ChooseColor', {
                        name: 'Điện Thoại Vsmart Joy 3 - Hàng chính hãng',
                        price: '1.790.000đ',
                    })}}>
                        <Text style={styles.selectText}>
                            4 MÀU - CHỌN MÀU
                        </Text>
                        <Image source={require('../assets/right.png')} style={styles.arrowRight}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.buy}>
                    <TouchableOpacity style={styles.buyButton} >
                        <Text style={styles.buyText}>
                            CHỌN MUA
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
  );
}

export default CheckOut;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    wrap: {
        backgroundColor: '#fff',
        width: windowWidth,
        height: windowHeight,
        position: 'relative',
    },
    container: {
        backgroundColor: '#fff',
        marginLeft: 20,
        marginRight: 20,
        width: windowWidth,
        height: windowHeight,
    },

    productImage: {
        width: 300,
        height: 300,
        marginTop: 40,
        marginBottom: 20,
        alignSelf: 'center',
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
        color: '#000',
        lineHeight: 20,
    },
    oldPrice: {
        fontSize: 17,
        marginLeft: 20,
        textDecorationLine: 'line-through',
        color: '#ccc',
        lineHeight: 20,
    },

    refund: {
        flexDirection: 'row',
        marginBottom: 30,
        alignSelf: 'flex-start',
    },
    refundText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#fa492c',
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
        position: 'relative',
    },
    selectColorButton: {
        
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        padding: 10,
        width: 350,
        alignSelf: 'center',
        justifyContent: 'center',
        shadowColor: '#ccc',
        shadowOpacity: 0.2,
        shadowRadius: 10,
        shadowOffset: { width: 5, height: 5 },
    },
    selectText: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#000',

    },
    arrowRight: {
        position: 'absolute',
        right: 10,
        width: 20,
        height: 20,
        marginLeft: 20,
        top: 10,
    },

    buy: {
        flexDirection: 'row',
        marginBottom: 10,
        position: 'absolute',
        bottom: 0,
    },
    buyButton: {
        position: 'relative',
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#fa492c',
        borderRadius: 10,
        padding: 10,
        width: 350,
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: '#fa492c',
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 10,
        shadowOffset: { width: 5, height: 5 },
    },
    buyText: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#fff',
    },

});
