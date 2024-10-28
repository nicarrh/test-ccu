import { RequestHelper } from '@ccu/shared';

const productClient = RequestHelper.fakeStoreApiInstance();

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const getAllProducts = async (): Promise<Product[] | never> => {
  try {
    const { data } = await productClient.get('products');
    return data;
  } catch (error) {
    throw error;
  }
};

const getProductById = async (productId: number): Promise<Product | never> => {
  try {
    const { data } = await productClient.get(`products/${productId}`);
    return data;
  } catch (error) {
    throw error;
  }
};

export default { getAllProducts, getProductById };
