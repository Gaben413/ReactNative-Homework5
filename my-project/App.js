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
    {name: 'Seven', key: 7},
    {name: 'Eight', key: 8},
    {name: 'Nine', key: 9},
    {name: 'Ten', key: 10},
    {name: 'Eleven', key: 11},
    {name: 'Twelve', key: 12},
    {name: 'Thirteen', key: 13},
    {name: 'Fourteen', key: 14},
    {name: 'Fifteen', key: 15},
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
        numColumns={3}
        keyExtractor={(item) => item.key}
        data={count}
        renderItem={({item}) => (
          <Text style={styles.item}>{item.name}</Text>
        )}
        style={styles.flatListContainer}
        columnWrapperStyle={{
          flex: 1,
          alignItems: 'center',
          alignSelf: 'center',
          backgroundColor: 'silver',
        }}
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
    height: '100%',
  },
  item: {
    margin: 5,
    width: 125,
    height: 150,
    textAlign: 'center',
    textAlignVertical: 'center',
    backgroundColor: 'blue',
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});
