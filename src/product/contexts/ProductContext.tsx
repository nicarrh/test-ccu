import React from 'react';
import { createContext, useMemo } from 'react';
import useProduct from '../hooks/useProduct';
import { Product } from '../repositories/ProductRepository';

export type ProductContextType = {
  product: Product | null;
  isLoading: boolean;
  products: Product[];
  getAllProducts: () => Promise<void>;
  getProductById: (id: number) => Promise<Product>;
  hasError: boolean;
};

const ProductContext = createContext<ProductContextType>({} as ProductContextType);

type Props = {
  children: React.ReactNode;
};

const ProductProvider = ({ children }: Props) => {
  const { product, products, isLoading, getAllProducts, getProductById, hasError } = useProduct();
  const value = useMemo(
    () => ({
      product,
      products,
      isLoading,
      getAllProducts,
      getProductById,
      hasError,
    }),
    [product, products, isLoading, getAllProducts, getProductById, hasError],
  );
  return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>;
};

export { ProductContext, ProductProvider };
