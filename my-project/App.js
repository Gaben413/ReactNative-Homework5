import React, {useState} from "react"
import { StatusBar } from 'expo-status-bar';
import { FlatList, ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {

  const [count, setCount] = useState([
    {name: 'One', key: 1},
    {name: 'Two', key: 2},
    {name: 'Three', key: 3},
    {name: 'Four', key: 4},
    {name: 'Five', key: 5},
    {name: 'Six', key: 6},
  ])

  const apertarBotao = (key) => {
    setCount(
      (pessoasAnteriores) => {
        return pessoasAnteriores.filter(count => count.key != key);
      }
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Add Gateway</Text>
      <FlatList 
        numColumns={2}
        keyExtractor={(item) => item.key}
        data={count}
        renderItem={({item}) => (
          <Text style={styles.item}></Text>
        )}
        style={styles.flatListContainer}
        columnWrapperStyle={{
          flex: 1,
          alignItems: 'stretch',
          alignSelf: 'center',
          backgroundColor: 'white',
        }}
      />
      <FlatList 
        numColumns={1}
        keyExtractor={(item) => item.key}
        data={count}
        renderItem={({item}) => (
          <Text style={styles.item}></Text>
        )}
        style={styles.flatListContainer}
      />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    alignItems: 'center',
  },
  titleText:{
    textAlign: 'center',
    fontSize: 25,
    padding: 10,
  },
  flatListContainer:{
    backgroundColor: 'silver',
    width: '100%',
    alignSelf: 'center',
    backgroundColor: 'white',
  },
  item: {
    margin: 5,
    width: '100%',
    height: 150,
    textAlign: 'center',
    textAlignVertical: 'center',
    alignSelf: 'center',
    backgroundColor: 'silver',
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});
