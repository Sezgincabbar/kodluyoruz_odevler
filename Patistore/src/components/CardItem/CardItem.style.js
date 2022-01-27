import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceff1',
    padding: 15,
    margin: 10,
    marginRight: 10,
    borderRadius: 10,
  },
  card_image: {
    height: Dimensions.get('window').height / 4,
    width: '100%',
    borderRadius: 10,
  },
  card_title: {
    fontSize: 25,
    color: 'black',
  },
  card_price: {
    fontSize: 18,
  },
  card_status: {
    color: '#FF0000',
    fontSize: 18,
    textTransform: 'uppercase',
  },
});
