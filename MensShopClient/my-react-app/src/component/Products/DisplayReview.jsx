
import React, { useState, useEffect } from 'react'
import userService from '../../Services/user.service';
import StarRating from './StarRating';


const Review = ({ id }) => {



  const [review, setReview] = useState([]);
  const [isHovered, setIsHovered] = useState(false);

  // const [tempEmp, setTempemp] = useState([]);

  const init = () => {
    userService
      .getAllReview(id)
      .then((response) => {
        console.log('Printing review data', response.data);
        setReview(response.data);
        debugger
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



  const cardStyle = {
    backgroundColor: isHovered ? '#f0f0f0' : '', // Change background color on hover
    transform: isHovered ? 'scale(1.05)' : '', // Increase size on hover
    boxShadow: isHovered ? '0px 0px 5px rgba(0, 0, 0, 0.3)' : '', // Add shadow on hover
    cursor: isHovered ? 'pointer' : '', // Change cursor to pointer on hover
    transition: 'background-color 0.3s ease, transform 0.2s ease, box-shadow 0.2s ease', // Add smooth transitions
  };


  return (


    <div
    className="card"
    style={cardStyle}
    onMouseEnter={() => setIsHovered(false)}
    onMouseLeave={() => setIsHovered(false)}
  >
    <div className="card-body">
      <h1 className="card-title" style={{ color: 'black' }}>Product Review</h1>
      <hr></hr>
      <div className="row d-flex py-" style={{ display: 'flex', flexDirection: 'column' }}>
        {review.map((reviews, index) => (
          <div className='py-3' style={{ display: 'flex', flexDirection: 'column' }} key={index}>
            <div className="user-details" style={{ display: 'flex', flexDirection: 'column' }}>
              <h6 className='fa fa-user' style={{ color: 'black' }}>
                {reviews.customer.firstName}
              </h6>
              <h5 style={{ color: '' }}>
                <StarRating rating={reviews.rating}></StarRating>
                {/* {reviews.rating} ⭐ */}
              </h5>
              <p className="card-text display-" style={{ color: 'green' }}>
                {reviews.reviewText}
              </p>
              <hr />
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Review;