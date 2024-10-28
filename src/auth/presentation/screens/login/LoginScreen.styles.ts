import { Constants } from '@ccu/shared';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Constants.colors.softBlue,
    paddingTop: Constants.dimensions.screenWidth * 0.1,
  },
  loginButton: {
    backgroundColor: Constants.colors.softBlue,
    padding: 10,
    borderRadius: 10,
    width: Constants.dimensions.screenWidth * 0.8,
    marginTop: Constants.dimensions.screenWidth * 0.1,
    borderColor: Constants.colors.midBlue,
    borderWidth: 1,
  },
  loginText: {
    color: Constants.colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    color: 'gray',
  },
  title: {
    color: Constants.colors.white,
    fontSize: Constants.dimensions.screenWidth * 0.08,
    fontWeight: 'bold',
    textAlign: 'left',
  },
});
