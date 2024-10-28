import { StyleSheet } from 'react-native';
import { Constants } from '@ccu/shared';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Constants.colors.white,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  image: {
    width: Constants.dimensions.screenWidth * 0.5,
    height: Constants.dimensions.screenHeight * 0.3,
    backgroundColor: 'trasnparent',
  },
  title: {
    color: Constants.colors.white,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  price: {
    color: Constants.colors.white,
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productImageContent: {
    marginTop: 10,
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'column',
    flexGrow: 1,
    flexWrap: 'wrap',
  },
  productDescription: {
    fontSize: 15,
    color: Constants.colors.white,
    opacity: 0.3,
    textAlign: 'justify',
  },
  descriptionTitle: { fontSize: 25, color: Constants.colors.white },
  productDescriptionContent: {
    flex: 1,
    marginTop: Constants.dimensions.screenHeight * 0.1,
    maxHeight: Constants.dimensions.screenHeight * 0.2,
    height: 'auto',
    justifyContent: 'space-around',
  },
  descriptionContainer: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  layout: {
    top: Constants.dimensions.screenHeight * 0.4,
    backgroundColor: Constants.colors.midBlue,
    alignItems: 'flex-start',
    paddingTop: Constants.dimensions.screenHeight * 0.03,
    paddingHorizontal: Constants.dimensions.screenWidth * 0.05,
  },
  header: {
    position: 'absolute',
    top: Constants.dimensions.screenHeight * 0.05,
    left: Constants.dimensions.screenWidth * 0.03,
  },
});

export default styles;
