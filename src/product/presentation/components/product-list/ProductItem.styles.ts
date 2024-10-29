import { StyleSheet } from 'react-native';
import { Constants } from '@ccu/shared';

const styles = StyleSheet.create({
  item: {
    width: Constants.dimensions.screenWidth / 2 - 20,
    height: Constants.dimensions.screenHeight / 3 - 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  image: {
    width: Constants.dimensions.screenWidth / 2 - 70,
    height: Constants.dimensions.screenHeight / 4 - 70,
    borderRadius: 5,
  },
  itemTitle: {
    flexWrap: 'wrap',
    fontSize: 13,
  },
  itemPrice: {
    fontWeight: 'bold',
    textAlign: 'left',
  },
});

export default styles;
