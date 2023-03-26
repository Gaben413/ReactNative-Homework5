import React, {useState} from "react"
import { StatusBar } from 'expo-status-bar';
import { FlatList, ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {

  const [count, setCount] = useState([
    {name: '0', key: 0},
    {name: '1', key: 1},
    {name: '2', key: 2},
    {name: '3', key: 3},
    {name: '4', key: 4},
    {name: '5', key: 5},
    {name: '6', key: 6},
    {name: '7', key: 7},
    {name: '8', key: 8},
    {name: '9', key: 9},
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
          <Text style={styles.item}>{item.name}</Text>
        )}
        style={styles.flatListContainer}
        columnWrapperStyle={{alignItems: 'stretch'}}
      />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  titleText:{
    textAlign: 'center',
    fontSize: 25,
    padding: 10,
  },
  flatListContainer:{
    backgroundColor: 'silver',
  },
  item: {
    marginTop: 24,
    marginRight: 30,
    padding: 40,
    paddingLeft: 85,
    paddingRight: 85,
    backgroundColor: 'magenta',
    fontSize: 24,
    fontWeight: 'bold',
    alignItems: 'stretch',
  },
});
