import React, { useState ,useEffect} from 'react';
import { useParams } from 'react-router';
import userService from '../../Services/user.service';
import ProductImage from './ProductImage';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const ProductReview = () => {
  const {id}=useParams()
  const product_id=id;
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState(0);
  const history=useHistory();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const customer_id=sessionStorage.getItem('userId')
  const init = () => {
    userService
        .getProduct(id)
        .then((response) => {
            setProduct(response.data);
            // console.log(productName);
            console.log(product);
            debugger
        })
        .catch((error) => {
            console.log('Something went wrong', error);
        });
};

useEffect(() => {
    init();
}, []);



const Loading = () => {
        
  return (
      <>
      Loading..............
      {/* <SpinningCircles></SpinningCircles> */}
      </>
  )
}



  const SaveReview=(e)=>{
    debugger
    e.preventDefault();
    const Review = {
      customer_id,
      product_id,
        reviewText,
        rating
    }


    userService
    .addReview(Review)
    .then((response)=>{
      debugger
      console.log('Review Added Successfully',response.data)
      history.goBack();
    })
    .catch((error)=>{
      
     
      console.log("something went wrong",error.response)
    })
  }
debugger

const ShowProducts=()=>{
  return (
   <>
   <div className='col-md-6' style={{marginTop:'100px'}}>
                <ProductImage prodId={id} height={400} width={400} />
                <hr></hr>
          </div>
            
            <div className='col-md-6' style={{marginTop:'100px'}}>
                <h4 className='text-uppercase text-black-50'>
                    {product.category}
                </h4>
                <h1 className='display-5'>
                  {product.title}
                </h1>
               <h3 className='display-6 fw-bold my-4'>
               ₹ {product.price}
               </h3>    
               <p className='lead'>{product.description}</p>
              
               <h2 className='bg-info '>Write a Review</h2>
      <form action='/product:id'>
      <div className="form-group">
          <label style={{color:'purple'}}>Review Text</label>
          <textarea
           type="text"
           className="form-control"
           id="reviewtext"
           name="reviewtext"
           value={reviewText}
           onChange={(e)=>setReviewText(e.target.value)}
           required
          ></textarea>
        </div>
        <div className="form-group">
          <label style={{color:'purple'}}>Rating:</label>
          <select
            className="form-control"
            id="rating"
            name="rating"
            value={rating}
            onChange={(e)=>setRating(e.target.value)}
            required
          >
            <option value={0}>Select Rating</option>
            <option value={5}>5 Stars</option>
            <option value={4}>4 Stars</option>
            <option value={3}>3 Stars</option>
            <option value={2}>2 Stars</option>
            <option value={1}>1 Star</option>
          </select>
        </div>
        
        <button type="submit" className="btn btn-primary" onClick={(e)=>SaveReview(e)}>
          Submit Review
        </button>
      </form>
                          
      
            </div>
          
  

    </>
   
  );

  }






  return (
    <div>
        <div className='container py-5' style={{marginTop:'-100px'}}>
            <div className='row py-5'>
                {loading ? <Loading /> : <ShowProducts />}
            </div>
        </div>
    </div>
)





}
export default ProductReview;



 