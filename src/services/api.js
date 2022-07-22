import { setItemToLocalStorage } from './storage';
const URL = 'https://front-test-api.herokuapp.com/api/';

export const getCatalogue = async () => {
  try {
    const response = await fetch(URL + 'product');
    const data = await response.json();
    setItemToLocalStorage('catalogue', JSON.stringify(data));
    return data;
  } catch (error) {
    throw error;
  }
};

export const getProductDetail = async (productId) => {
  try {
    const response = await fetch(URL + 'product/' + productId);
    const data = await response.json();
    setItemToLocalStorage('product_id_' + productId, JSON.stringify(data));
    return data;
  } catch (error) {
    throw error;
  }
};

export const updateCart = async (productDetail) => {
  try {
    const response = await fetch(URL + 'cart', {
      method: 'POST',
      body: JSON.stringify(productDetail),
      headers: { 'content-type': 'application/json' },
    });
    const data = await response.json();
    setItemToLocalStorage('cart_count', JSON.stringify(data));
    return data;
  } catch (error) {
    throw error;
  }
};
