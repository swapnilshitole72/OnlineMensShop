//import React from 'react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import userService from '../Services/user.service';
//import { useEffect } from 'react';
import './Addproduct.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { useParams } from 'react-router'



export default function Addproducts() {

  // const { id } = useParams();
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');

  const [price, setPrice] = useState('');
  //const [imagePath, setImagePath] = useState('');
  const [quantity, setQuantity] = useState('');



  //image handling

  const [selectedImage, setSelectedImage] = useState('');

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };





  //drop down category
  const [category, setCategory] = useState('Choose...');

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };


  const image=(id)=>{
debugger
    userService
    .setImage(id,selectedImage)
    .then((product) => {
      toast.success("Product added successfully")
      console.log('user registered successfully', product.data)

    })
    .catch((error) => {
      toast.error("All fields must be filled")
      console.log("something went wrong", error.response)
    })
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
        image(4);
        toast.success("Product added successfully")
        console.log('user registered successfully', product.data)

      })
      .catch((error) => {
        toast.error("All fields must be filled")
        console.log("something went wrong", error.response)
      })



  }


  //save image 

  const saveImage = () => {
    const formData = new FormData();
    formData.append('selectedImage', selectedImage);

    axios
      .post('http://localhost:8080/product/18/image', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then((response) => {
        console.log('Image uploaded successfully', response.data);
      })
      .catch((error) => {
        console.log('Error uploading image', error.response);
      });
  };



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

              <br /><br />

              <div className='icon'>
                <form>
                  <div className="mb-3">
                    <label htmlFor="productCategory" className="form-label"></label>
                    <div className='form-group'>
                      <label htmlFor="productCategory">Choose Category</label>
                      <select
                        className="form-control"
                        id="category"
                        value={category}
                        onChange={handleCategoryChange}
                      >
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
              <br /><br />

              <div className='icon'>

                <div className="mb-3">
                  <label htmlFor="productQuantity" className="form-label">Quantity</label>
                  <input type="number" className="form-control" id="productQuantity" value={quantity} placeholder="Enter product quantity" onChange={(e) => setQuantity(e.target.value)} required />
                </div>

              </div>

              <br />

              {/* <input type="text" id='imagePath' value={imagePath} 
                        onChange={e=>setImagePath(e.target.value)}
                       />
                       <br /> */}


              <input
                type="file"
                className="form-control form-control-sm"
                id="selectedImage"
                accept="image/*"
                // onClick={saveImage}
                onChange={e => setSelectedImage(e.target.value)}

              />
              <br />
              <button
                type="button"
                className="btn btn-success"
                onClick={(e) => saveproduct(e)}
              >
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
