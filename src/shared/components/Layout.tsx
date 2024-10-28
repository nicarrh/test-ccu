import React from 'react';
import colors from '../constants/colors';
import dimensions from '../constants/dimensions';
import { View, StyleSheet, StyleProp, ViewStyle } from 'react-native';

type Props = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

const Layout = ({ children, style }: Props) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: dimensions.screenHeight * 0.22,
    backgroundColor: colors.white,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderTopStartRadius: 50,
    borderTopEndRadius: 50,
    paddingHorizontal: 10,
    paddingBottom: dimensions.screenWidth * 0.1,
    paddingTop: dimensions.screenWidth * 0.3,
  },
});

export default Layout;
