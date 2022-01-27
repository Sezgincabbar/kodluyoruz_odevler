import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceff1',
    padding: 5,
    margin: 5,
    borderRadius: 10,
  },
  card_image: {
    height: Dimensions.get('window').height / 4,
    width: '100%',
    borderRadius: 10,
    resizeMode: 'contain',
  },
  card_title: {
    fontSize: 20,
    color: 'black',
    marginBottom: 15,
    fontWeight: 'bold',
  },
  card_price: {
    fontSize: 18,
    fontWeight: '700',
  },
  card_status: {
    color: '#FF0000',
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: '700',
  },
});
