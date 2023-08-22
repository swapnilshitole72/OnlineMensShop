import httpClient from '../http-common';

 const create = (data) => {
    return httpClient.post('', data);
  };

  
  
  // const get = (id) => {
  //   return httpClient.get(`${id}`);
  // };

export default { create };
