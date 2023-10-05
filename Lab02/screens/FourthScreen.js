import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Pressable, TouchableOpacity,TextInput,Dimensions } from 'react-native';
import { useState, useEffect } from 'react';


const windowDimensions = Dimensions.get('window');
const screenDimensions = Dimensions.get('screen');


const FourthScreen = props => {    
    const [dimensions, setDimensions] = useState({
        window: windowDimensions,
        screen: screenDimensions,
    });

    useEffect(() => {
        const subscription = Dimensions.addEventListener(
        'change',
        ({window, screen}) => {
            setDimensions({window, screen});
        },
        );
        return () => subscription?.remove();
    });

    const {navigation, route} = props;
    const {navigate, goBack} = navigation;
    return ( 
            <View style={styles.container}>
                <View style={styles.product}>
                    <View style={styles.productImageWrap}>
                        <Image source={require('../assets/sach.jpg')} style={styles.productImage}/>
                    </View>

                    <View style={styles.productInfo}>
                        <Text style={styles.productName}>Nguyên lý phân tích và ứng dụng</Text>
                        <Text style={styles.productName}>Cung cấp bởi Tiki Trading</Text>
                        <Text style={styles.productPrice}>141.800 đ</Text>
                        <Text style={styles.productOldPrice}>141.800 đ</Text>

                        <View style={styles.productQuantityWrap}>
                            <View style={styles.productQuantity}>
                                <Pressable style={styles.buttonQuantity}>
                                    <Text style={styles.buttonText}>-</Text>
                                </Pressable>
                                <Text style={styles.quantity}>1</Text>
                                <Pressable style={styles.buttonQuantity}>
                                    <Text style={styles.buttonText}>+</Text>
                                </Pressable>
                            </View>

                            <View style={styles.productPayLater}>
                                <Text style={styles.linkText}>Mua sau</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.discount}>
                    <Text style={styles.discountText}>Mã giảm giá đã lưu</Text>
                    <Text style={styles.linkText}>Xem tại đây</Text>
                </View>

                <View style={styles.voucher}>
                    <View style={styles.voucherLeft}>
                        <Image source={require('../assets/discount.png')} style={styles.voucherImage}/>
                        <Text style={styles.voucherText}>Mã giảm giá</Text>
                    </View>
                    <Pressable style={styles.buttonVoucher}>
                        <Text style={styles.buttonVoucherText}>Áp dụng</Text>
                    </Pressable>
                </View>
                
                <View style={styles.question}>
                    <Text style={styles.questionText}>Bạn có phiếu quà tặng Tiki/Got it/ Urbox?</Text>
                    <Text style={styles.linkText}>Nhập tại đây</Text>
                </View>

                <View style={styles.totalWrap}>
                    <View style={styles.total}>
                        <Text style={styles.totalText}>Tạm tính</Text>
                        <Text style={styles.totalMoney}>141.800 đ</Text>
                    </View>
                </View>
                <View style={{flex:1, backgroundColor:'#ccc'}}></View>
                <View style={styles.checkOut}>
                    <View style={styles.total}>
                        <Text style={styles.totalText}>Thành tiền</Text>
                        <Text style={styles.totalMoney}>141.800 đ</Text>
                    </View>
                    <TouchableOpacity onPress={() => {navigate('FirstScreen')}}>
                        <View style={styles.button}>
                            <Text style={styles.buttonCheckoutText}>Tiến hành đặt hàng</Text>
                        </View>
                    </TouchableOpacity>
                </View>
        </View>
    );
}

export default FourthScreen;


const styles = StyleSheet.create({
    container: {
        width: 'screenWidth',
        height: 'screenHeight',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        flex: 1,
    },

    product: {
        width: '90%',
        display: 'flex',
        flexDirection: 'row',
        marginTop: 50,
        position: 'relative',
        top: 0,
        alignItems: 'center',
        marginBottom: 20,
    },
    productImageWrap: {
        width: 'auto',
        height: 'auto',
        borderRadius: 5,
        overflow: 'hidden',
        marginRight: 10,
    },
    productImage: {
        width: 100,
        height: 140,
        borderRadius: 5,
        padding: 10,
    },

    productInfo: {
    },
    productName: {
        color: '#000',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    productPrice: {
        color: '#ee0d0d',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    productOldPrice: {
        color: '#ccc',
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 10,
        textDecorationLine: 'line-through',
    },
    productQuantityWrap: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    productQuantity: {
        display: 'flex',
        flexDirection: 'row',
        width: 'auto',
        alignItems: 'center',
    },
    buttonQuantity: {
        backgroundColor: '#ccc',
        width: 30,
        height: 30,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#000',
        fontSize: 15,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    quantity: {
        color: '#000',
        fontSize: 17,
        textAlign: 'center',
        fontWeight: 'bold',
        paddingLeft: 10,
        paddingRight: 10,
    },
    productPayLater: {
        width: 'auto',
    },
    linkText: {
        color: '#134fec',
        fontSize: 15,
        textAlign: 'center',
        fontWeight: 'bold',
    },

    discount: {
        display: 'flex',
        flexDirection: 'row',
        width: '90%',
        marginBottom: 20,
    },
    discountText: {
        color: '#000',
        fontSize: 15,
        fontWeight: 'bold',
        marginRight: 30,
    },

    voucher: {
        display: 'flex',
        flexDirection: 'row',
        width: '90%',
        marginBottom: 30,
        justifyContent: 'space-between',
    },
    voucherLeft: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: 60,
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 20,
        paddingRight: 20,
    },
    voucherText: {
        color: '#000',
        fontSize: 17,
        fontWeight: 'bold',
        marginRight: 10,
    },
    buttonVoucher: {
        backgroundColor: '#134fec',
        width: 120,
        height: 60,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonVoucherText: {
        color: '#fff',
        fontSize: 17,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    voucherImage: {
        width: 30,
        height: 30,
        marginRight: 10,
    },

    question: {
        display: 'flex',
        flexDirection: 'row',
        width: '90%',
        marginBottom: 15,
    },
    questionText: {
        color: '#000',
        fontSize: 15,
        fontWeight: 'bold',
        marginRight: 5,
    },

    totalWrap: {
        display: 'flex',
        flexDirection: 'row',
        width: '90%',
        marginBottom: 10,
        justifyContent: 'space-between',
    },
    total: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        marginBottom: 10,
        justifyContent: 'space-between',
    },
    totalText: {
        color: '#000',
        fontSize: 20,
        fontWeight: 'bold',
    },
    totalMoney: {
        color: '#ee0d0d',
        fontSize: 20,
        fontWeight: 'bold',
    },

    checkOut: {
        width: '90%',
        position: 'absolute',
        bottom: 0,
        
    },
    button: {
        backgroundColor: '#ee0d0d',
        width: '100%',
        height: 60,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        marginTop: 10,
    },
    buttonCheckoutText: {
        color: '#fff',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
    },
});
