import useProduct from './infraestructure/hooks/useProduct';
import ProductRepository from './repositories/ProductRepository';
import ProductListScreen from './presentation/screens/product-list/ProductListScreen';
import { ProductProvider, ProductContext } from './infraestructure/contexts/ProductContext';
import ProductDetailScreen from './presentation/screens/product-details/ProductDetailScreen';

export {
  ProductListScreen,
  ProductDetailScreen,
  useProduct,
  ProductRepository,
  ProductProvider,
  ProductContext,
};
