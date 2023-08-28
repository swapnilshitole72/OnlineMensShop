import React from 'react';
import './StarRating.css';
const StarRating = ({ rating }) => {
  const fullStar = '★';
  const emptyStar = '☆';

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<span key={i} className="star">{fullStar}</span>);
      } else {
        stars.push(<span key={i} className="star">{emptyStar}</span>);
      }
    }
    return stars;
  };

  return (
    <div className="star-rating">
      {renderStars()}
    </div>
  );
};

export default StarRating;
