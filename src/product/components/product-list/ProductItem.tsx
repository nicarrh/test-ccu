import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import Img from '../shared/Img';
import { Product } from '../../repositories/ProductRepository';
import styles from './ProductItem.styles';

type Props = {
  item: Product;
  index: number;
  onPress: () => void;
};

const ProductItem = ({ item, index, onPress }: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.item, index % 2 ? { borderLeftWidth: 1, borderLeftColor: '#ddd' } : {}]}>
        <Img
          src={{ uri: item.image }}
          style={styles.image}
          resizeMethod="auto"
          resizeMode="contain"
        />
        <View>
          <Text style={styles.itemTitle} numberOfLines={2}>
            {item.title}
          </Text>
          <Text style={styles.itemPrice}>${item.price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductItem;
