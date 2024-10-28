import { useState } from 'react';
import ProductRepository, { Product } from '../repositories/ProductRepository';

const useProduct = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [product, setProduct] = useState<Product | null>(null);
  const [hasError, setHasError] = useState<boolean>(false);

  const getAllProducts = async () => {
    try {
      setIsLoading(true);
      const res = await ProductRepository.getAllProducts();
      setProducts(res);
    } catch (error) {
      setHasError(true);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const getProductById = async (productId: number): Promise<Product> => {
    try {
      setIsLoading(true);
      const res = await ProductRepository.getProductById(productId);
      setProduct(res);
      return res;
    } catch (error) {
      setHasError(true);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return { getAllProducts, products, product, getProductById, isLoading, hasError };
};

export default useProduct;
