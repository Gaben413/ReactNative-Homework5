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
      <ScrollView>
        {count.map(
          (item) => {
            return(
              <TouchableOpacity
                onPress={() => apertarBotao(item.key)}
                key={item.key}
              >
                <Text style={styles.item}>{item.name}</Text>
              </TouchableOpacity>
            )
          }
        )}
      </ScrollView>
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
    backgroundColor: 'white',
  },
  item: {
    width: '95%',
    height: 125,
    margin:5,
    alignSelf: 'center',
    backgroundColor: 'red',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'white',
  },
});
