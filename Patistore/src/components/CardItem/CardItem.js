import React from 'react';
import {Text, View, Image} from 'react-native';
import styles from './CardItem.style';

const CardItem = ({products}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.card_image} source={{uri: products.imgURL}} />
      <View style={{padding: 10}}>
        <Text style={styles.card_title}>{products.title}</Text>
        <Text style={styles.card_price}>{products.price}</Text>
        <Text style={styles.card_status}>
          {products.inStock === true ? '' : 'Stokta Yok'}
        </Text>
      </View>
    </View>
  );
};

export default CardItem;
