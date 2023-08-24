import httpClient from '../http-common';

  const create = (data) => {
    return httpClient.post('', data);
  };
  const get = (id) => {
    //const id=2;
    return httpClient.get(`http://localhost:8080/customer/${id}`);
  }; 

  const Addproducts = (product) => {
    return httpClient.post('product',product);
  };
  
  // const get = (id) => {
  //   return httpClient.get(`${id}`);
  // };

export default { create,get,Addproducts};

//'http://localhost:8080/product',