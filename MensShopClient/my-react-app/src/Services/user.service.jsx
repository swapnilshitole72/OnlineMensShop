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

  const updateCustomer=(user)=>{
    return httpClient.put('customer/update/',user);
  };

  const setPassward=(user)=>{
    return httpClient.put('customer/password',user);
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
    return httpClient.post('order/',order);
  };

  const getOrderByCustId=(id)=>{
    return httpClient.get(`order/${id}`);

  };

  const remove = (productId) => {
    return httpClient.delete(`product/${productId}`);
  }

  const setPayment=(payment)=>{
    return httpClient.post('payment/',payment)
  };

  const createOTP=(Email)=>{
    return httpClient.post('customer/getotpforforgotpass',Email);
  }

  const verifyOTP=(otp)=>{
        return httpClient.post('customer/verifyotpforforgot',otp); 
  }

  const adddchangedpass=(saveforgorObject)=>{
    
    return httpClient.post('customer/storenewpass',saveforgorObject); 
  }

  const getAllPayments=()=>{
    return httpClient.get('payment');
  };

  const getAllReview=(id)=>{
    return httpClient.get(`review/${id}`);
  };

  const addReview=(Review)=>{
    return httpClient.post('review',Review);
  }
  // const get = (id) => {
  //   return httpClient.get(`${id}`);
  // };

export default { create ,login, get, setAddress, getAll, updateCustomer, setPassward, getAllProducts, getProduct, setImage, 
  Addproducts, getByCategory, remove, getImage, getOrderByCustId, setOrder, setPayment,
  adddchangedpass, verifyOTP, createOTP, getAllPayments, getAllReview, addReview};