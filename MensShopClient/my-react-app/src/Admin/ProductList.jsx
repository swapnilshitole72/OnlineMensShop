import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import productService from './product.service';
import userService from '../Services/user.service';
import ProductImage from '../component/Products/ProductImage';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  // const [tempEmp, setTempemp] = useState([]);

  const init = () => {
    userService
      .getAllProducts()
      .then((response) => {
        // console.log('Printing product data', response.data);
        setProducts(response.data);
        console.log(products);
        // debugger
        // setTempemp(response.data);
        //  console.warn(response.data);
      })
      .catch((error) => {
        console.log('Something went wrong', error);
      });
  };

  useEffect(() => {
    init();
  }, []);

  const handleDelete = (id) => {
    console.log('Printing id', id);
    userService
      .remove(id)
      .then((response) => {
        console.log('product deleted successfully', response.data);
        init();
      })
      .catch((error) => {
        console.log('Something went wrong', error);
      });
  };
debugger
  return (
    <center>
    <div className='container'>
      <h3 style={{ color: 'blue' }}>List of Products</h3>

      <hr />
      <div>
       
        <table className='table table-bordered table-striped'>
          <thead className='thead-dark'>
            <tr>
              <th style={{ color: '#A52A2A' }} >Product Name</th>
              <th style={{ color: '#A52A2A' }} >Description</th>
              <th style={{ color: '#A52A2A' }} >Price</th>
              <th style={{ color: '#A52A2A' }} >Category</th>
              <th style={{ color: '#A52A2A' }} >Image</th>
             
              <th colSpan={3} style={{ color: '#A52A2A' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.productName}</td>
                <td>{product.description}</td>
                <td>{product.price}</td>
                <td>{product.category}</td>
                <td style={{width:"100px"}}>{<ProductImage prodId={product.id} height={"40px"} width={"50px"}/>}</td>                
                
                <td>
                  <button
                    className='btn btn-danger ml-2'
                onClick={()=>handleDelete(product.id)}
                >
                    Delete
                  </button>
                </td>
              </tr>
            ))}

          </tbody>
          
        </table>
        
      </div>
    </div>
    </center>
  );
};

export default ProductList;
