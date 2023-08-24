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

  const remove = (productId) => {
    return httpClient.delete(`product/${productId}`);
  }
  // const get = (id) => {
  //   return httpClient.get(`${id}`);
  // };

export default { create ,login, get, getAll, remove};