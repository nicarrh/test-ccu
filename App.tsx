import React from 'react';
import { AuthProvider } from '@ccu/auth';
import { NavigationContainer } from '@react-navigation/native';
import { RootNavigation } from '@ccu/app';
import { StatusBar } from 'expo-status-bar';
import { ProductProvider } from '@ccu/product';

const App = () => {
  return (
    <AuthProvider>
      <ProductProvider>
        <NavigationContainer>
          <StatusBar style="auto" />
          <RootNavigation />
        </NavigationContainer>
      </ProductProvider>
    </AuthProvider>
  );
};

export default App;
