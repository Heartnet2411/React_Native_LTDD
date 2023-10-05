import { StyleSheet, Text, View, Image, Button, Pressable, TouchableOpacity } from 'react-native';
import * as React from 'react';
import Textarea from 'react-native-textarea';

const SecondScreen = props => {    

    const {navigation, route} = props;
    const {navigate, goBack} = navigation;
    return (
        <View style={styles.wrap}>  
            <View style={styles.container}>
                <View style={styles.product}>
                    <Image source={require('../assets/reciver.jpg')} style={styles.productImage}/>
                    <Text style={styles.productName}>USB Bluetooth Music Receiver HJX-001- Biến loa thường thành loa bluetooth</Text>
                </View>
                <Text style={styles.rate}>Cực kỳ hài lòng</Text>
                <View style={styles.rateStar}>
                    <Image source={require('../assets/star.png')} style={styles.star}/>
                    <Image source={require('../assets/star.png')} style={styles.star}/>
                    <Image source={require('../assets/star.png')} style={styles.star}/>
                    <Image source={require('../assets/star.png')} style={styles.star}/>
                    <Image source={require('../assets/star.png')} style={styles.star}/>
                </View>
                <View style={styles.addPicture}>
                    <Image source={require('../assets/camera.png')} style={styles.camera}/>
                    <Text style={styles.addPictureText}>Thêm hình ảnh</Text>
                </View>
                <Textarea
                    containerStyle={styles.textareaContainer}
                    style={styles.textarea}
                    maxLength={120}
                    placeholder={'Hãy chia sẻ những điều mà bạn thích về sản phẩm'}
                    placeholderTextColor={'#c7c7c7'}
                    underlineColorAndroid={'transparent'}
                />
                <TouchableOpacity onPress={() => {navigate('ThirdScreen')}}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Gửi</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default SecondScreen;

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        backgroundColor: '#fff',
    },
    wrap: {
        flex: 1,
    },
    
    product: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 120,
    },
    productImage: {
        width: 100,
        height: 100,
        borderRadius: 20,
        padding: 10,
        marginLeft: 10,
    },
    productName: {
        flex: 1,
        color: '#000',
        fontSize: 20,
        fontWeight: 'bold',
        padding: 10,
    },

    rate: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
    },
    rateStar: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 20,
        justifyContent: 'space-around'
    },
    star: {
        width: 30,
        height: 30,
        margin: 10,
    },

    addPicture: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 10,
        width: 300,
        height: 70,
    },
    addPictureText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
    },
    camera: {
        width: 30,
        height: 30,
        marginRight: 10,
    },

    textareaContainer: {
        height: 180,
        padding: 5,
        backgroundColor: '#F5FCFF',
        borderRadius: 10,
        width: 300,
        marginBottom: 30,
        borderColor: '#000',
        borderWidth: 1,
    },
    textarea: {
        textAlignVertical: 'top',  // hack android
        height: 170,
        fontSize: 17,
        color: '#333',
    },

    button: {
        backgroundColor: '#0d5db6',
        marginTop: 30,
        borderRadius: 10,
        width: 300,
        fontWeight: '500',
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 10,
    },
});
