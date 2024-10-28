import { Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { Constants, Layout, RootStackParamList } from '@ccu/shared';
import Img from '../../components/shared/Img';
import useContextProduct from '../../hooks/useContextProduct';
import styles from './ProductDetailScreen.styles';

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
