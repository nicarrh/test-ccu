import {
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  Text,
} from 'react-native';
import React, { useEffect, lazy, Suspense, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { Product } from '../../repositories/ProductRepository';
import { Constants, RootStackParamList } from '@ccu/shared';
import useContextProduct from 'src/product/hooks/useContextProduct';
import { useContextAuthentication } from '@ccu/auth';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

const LazyProducItem = lazy(() => import('src/product/components/product-list/ProductItem'));

type Props = NativeStackScreenProps<RootStackParamList, 'ProductList'>;

const ProductListScreen = ({ navigation }: Props) => {
  const { products, getAllProducts, getProductById, isLoading } = useContextProduct();
  const { logout } = useContextAuthentication();
  const [showLogout, setShowLogout] = useState(false);

  const handleOnPressItem = async (item: Product) => {
    try {
      await getProductById(item.id);
      navigation.navigate('ProductDetails', { productId: item.id });
    } catch (err) {
      throw new Error('Failed to fetch product details');
    }
  };

  const handleOnPressLogout = async () => {
    setShowLogout(false);
    await logout();
  };

  useEffect(() => {
    getAllProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const keyExtractor = (item: Product) => item.id.toString();

  const Placeholder = () => <ActivityIndicator size="small" color={Constants.colors.darkBlue} />;

  const renderItem = ({ item, index }: { item: Product; index: number }) => {
    return (
      <Suspense fallback={<Placeholder />}>
        <LazyProducItem item={item} index={index} onPress={() => handleOnPressItem(item)} />
      </Suspense>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" color={Constants.colors.darkBlue} />
      ) : (
        <FlatList
          data={products}
          renderItem={renderItem}
          numColumns={2}
          keyExtractor={keyExtractor}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={{ height: 1, backgroundColor: '#ddd' }} />}
          onEndReached={() => {
            setShowLogout(true);
          }}
          ListFooterComponent={() =>
            showLogout && (
              <TouchableOpacity onPress={handleOnPressLogout}>
                <View
                  style={{
                    height: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: Constants.colors.softBlue,
                    borderRadius: 10,
                    marginTop: 10,
                    flexDirection: 'row',
                  }}>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: 'bold',
                      color: Constants.colors.white,
                      marginRight: 10,
                    }}>
                    Cerrar sesión
                  </Text>
                  <Ionicons name="log-out-outline" size={30} color={Constants.colors.white} />
                </View>
              </TouchableOpacity>
            )
          }
        />
      )}
    </SafeAreaView>
  );
};

export default ProductListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
