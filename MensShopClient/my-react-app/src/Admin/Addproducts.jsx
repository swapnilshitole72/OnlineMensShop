import axios from 'axios';
import React, { useEffect, useState } from 'react';
import userService from '../Services/user.service';
import './Addproduct.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export default function Addproducts() {

  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const history = useHistory();
  const [selectedImage, setSelectedImage] = useState('');
  const [category, setCategory] = useState('Choose...');

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };



  const saveproduct = (p) => {

    p.preventDefault();
    const product = {
      productName,
      description,
      price,
      category,
      quantity,
      selectedImage,


    };
    debugger
    userService
      .Addproducts(product)
      .then((product) => {
        toast.success("Product added successfully")
        console.log('user registered successfully', product.data);
        history.push('/addimage/' + product.data.id);
      })
      .catch((error) => {
        toast.error("All fields must be filled")
        console.log("something went wrong", error.response)
      })
  }


  return (
    <>
      <div className='container '>
        <form >
          <div className='Outerclass1'>
            <br /><br />
            <div>
              <h1 className='SignTitle'>Add product</h1>
            </div>
            <br />

            <div className='content'>
              <div className='icon' >
                <input className='inputBOX' type="text" autoComplete='off'
                  id='productName'
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  placeholder='    Product Name ' />
              </div>
              <br /><br />
              <div className='icon' >  {/*Div for ur name */}

                <input className='inputBOX' type="text" autoComplete='off'
                  id='description'
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder='    Description ' />
              </div>
              <br /><br />

              <div className='icon'>  {/*Div for ur name */}
                <input className='inputBOX' type="text" autoComplete='off'
                  id='price'
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder='    price' />
              </div>
<br></br>
              <div className='icon'>
                <form>
                  <div className="mb-3">
                    <label htmlFor="productCategory" className="form-label"></label>
                    <div className='form-group'>
                      <b><label htmlFor="productCategory">Choose Category</label></b>
                      <select
                        className="form-control"
                        id="category"
                        value={category}
                        onChange={handleCategoryChange} >
                        <option disabled>Choose...</option>
                        <option value="SHIRT">SHIRT</option>
                        <option value="PANT">PANT</option>
                        <option value="T_SHIIRT">T_SHIRT</option>
                        <option value="TROUSER">TROUSER</option>
                      </select>
                    </div>
                  </div>
                </form>
              </div>
              <br />

              <div className='icon'>
                <div className="mb-3">
                 <b><label htmlFor="productQuantity" className="form-label">Quantity</label></b> 
                  <input type="number" className="form-control" id="productQuantity" value={quantity} placeholder="Enter product quantity" onChange={(e) => setQuantity(e.target.value)} required />
                </div>
              </div>
              <br />

              <button
                type="button"
                className="btn btn-dark col-md-12"
                onClick={(e) => saveproduct(e)}>
                Save
              </button>
              <ToastContainer
                position="top-right"
                autoClose={2500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
              />
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
