import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, TextInput, TouchableOpacity, Image, ScrollView, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';

var Data = {};

const name = "Thuan1";

fetch('https://653f271d9e8bd3be29e0028f.mockapi.io/todos')
  .then((response) => response.json())
  .then((json) => {
    json.filter((item) => item.name === name).map((item) => {
      Data = item;
      console.log(Data);
    });
  })
  .catch((error) => {
    console.error(error);
  });

const Todos = ({route, navigation}) => {
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Image style={styles.icon} source={require('../assets/search.png')} />
        <TextInput style={styles.input} placeholder='Search'/>
      </View>

      <View style={{backgroundColor: '#fff'}}>
      <ScrollView style={styles.list}>
        {
          Data.todos.map((item) => {
            return (
              <View style={styles.listItem}>
                <Feather name="check-square" size={24} color="green" />
                <Text style={styles.listText}>{item}</Text>
                <Feather name="edit" size={24} color="green" />
                <Feather style={{marginLeft:10}} name="delete" size={24} color="green" />
              </View>
            );
          })
        }
      </ScrollView>
      </View>

      <TouchableOpacity style={styles.add}>
        <Image style={styles.iconAdd} source={require('../assets/plus.png')} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default Todos;

const screenWidth = Dimensions.get("screen").width;
const screenHeight = Dimensions.get("screen").height;

const styles = StyleSheet.create({
  container: {
    width: screenWidth,
    height: screenHeight,
    backgroundColor: '#fff',
    position: 'relative',
  },

  search: {
    flexDirection: 'row',
    marginTop: 10,
    marginHorizontal: 30,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  icon: {
    width: 20,
    height: 20,
  },
  input: {
    marginLeft: 20,
    flex: 1,
    height: 40,
    fontSize: 17,
  },

  list: {
    marginHorizontal: 30,
    flex: 1,
    height: 'auto',
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    width: 'auto',
    backgroundColor: '#ccc',
    borderRadius: 10,
    padding: 10
  },
  listText: {
    fontSize: 17,
    marginLeft: 20,
    flex: 1,
  },

  add: {
    width: 60,
    height: 60,
    backgroundColor: '#1ba9ff',
    borderRadius: '50%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  iconAdd: {
    width: 40,
    height: 40,
    alignSelf: 'center',
  },

});
