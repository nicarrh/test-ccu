import React from 'react';
import { LoginScreen, useContextAuthentication } from '@ccu/auth';
import { ProductListScreen, ProductDetailScreen } from '@ccu/product';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '@ccu/shared';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigation = () => {
  const { isAuthenticated, loadingSplash } = useContextAuthentication();

  if (loadingSplash) {
    return null;
  }

  return (
    <Stack.Navigator>
      {isAuthenticated() ? (
        <>
          <Stack.Screen
            name="ProductList"
            component={ProductListScreen}
            options={{ header: () => null }}
          />
          <Stack.Screen
            name="ProductDetails"
            component={ProductDetailScreen}
            options={{ header: () => null }}
          />
        </>
      ) : (
        <Stack.Screen name="Login" component={LoginScreen} options={{ header: () => null }} />
      )}
    </Stack.Navigator>
  );
};

export default RootNavigation;
