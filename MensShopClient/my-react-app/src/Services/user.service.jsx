import httpClient from '../http-common';

 const create = (data) => {
    return httpClient.post('customer/register', data);
  };

  const login = (data) => {
    return httpClient.post('customer/login', data);
  };

  const get = (custId) => {
    return httpClient.get(`customer/${custId}`);
  };
  
  const getAll = () => {
    return httpClient.get('customer');
  };

  const setAddress=(userId,Addres)=>{
    return httpClient.post(`customer/address/${userId}`,Addres);
  };

  const getAllProducts = () => {
    return httpClient.get('product');
  };

  const getProduct = (prodId) => {
    return httpClient.get(`product/id/${prodId}`);
  };

  const getImage=(prodId)=>{
    return httpClient.get(`product/image/${prodId}`);
  };

  const setImage=(prodId,selectedImage)=>{
    return httpClient.post(`product/${prodId}/image`,selectedImage);
  };

  const Addproducts=(product)=>{
    return httpClient.post('product',product)
  };

  const getByCategory=(category)=>{
    return httpClient.get(`product/category/{category}?category=${category}`)
  };

  const setOrder=(order)=>{
    return httpClient.post('order/',order)
  };

  const remove = (productId) => {
    return httpClient.delete(`product/${productId}`);
  }


  // const get = (id) => {
  //   return httpClient.get(`${id}`);
  // };

export default { create ,login, get, setAddress, getAll, getAllProducts, getProduct, setImage, Addproducts, getByCategory, remove, getImage, setOrder};