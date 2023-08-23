import httpClient from '../http-common';

 const create = (data) => {
    return httpClient.post('customer/register', data);
  };

  const login = (data) => {
    return httpClient.post('customer/login', data);
  };

  
  
  // const get = (id) => {
  //   return httpClient.get(`${id}`);
  // };

export default { create ,login};