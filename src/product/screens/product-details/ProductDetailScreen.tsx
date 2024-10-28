import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { Constants, Layout, RootStackParamList } from '@ccu/shared';
import Img from '../../components/shared/Img';
import useContextProduct from '../../hooks/useContextProduct';

type Props = NativeStackScreenProps<RootStackParamList, 'ProductDetails'>;

const ProductDetailScreen = ({ navigation }: Props) => {
  const { product } = useContextProduct();

  const handleOnPressBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleOnPressBack}>
          <Ionicons name="arrow-back-outline" size={30} color={Constants.colors.darkBlue} />
        </TouchableOpacity>
      </View>
      <View style={styles.productImageContent}>
        <Img style={styles.image} src={{ uri: product?.image }} resizeMode="stretch" />
      </View>
      <Layout style={styles.layout}>
        <View style={styles.descriptionContainer}>
          <Text style={styles.title}>{product?.title}</Text>
          <View style={{ alignSelf: 'flex-end' }}>
            <Text style={styles.price}>${product?.price}</Text>
          </View>
          <View style={styles.productDescriptionContent}>
            <Text style={styles.descriptionTitle}>Descripción del producto</Text>
            <Text style={styles.productDescription} numberOfLines={8}>
              {product?.description}
            </Text>
          </View>
        </View>
      </Layout>
    </SafeAreaView>
  );
};

export default ProductDetailScreen;

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
