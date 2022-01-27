import React from 'react';
import {FlatList, View, Text, StyleSheet} from 'react-native';
import SearchBar from './components/SearchBar/SearchBar';
import CardItem from './components/CardItem/CardItem';
import productData from './components/Data/data.json';

function App() {
  const renderProduct = ({item}) => <CardItem products={item} />;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>PatikaStore</Text>
      <FlatList
        numColumns={2}
        ListHeaderComponent={() => <SearchBar />}
        keyExtractor={item => item.id.toString()}
        data={productData}
        renderItem={renderProduct}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    color: 'purple',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
  },
});

export default App;
