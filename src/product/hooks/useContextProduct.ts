import { useContext } from 'react';
import { ProductContext, ProductContextType } from '../contexts/ProductContext';

function useContextProduct(): ProductContextType {
  const productContext = useContext(ProductContext);
  return productContext;
}

export default useContextProduct;
