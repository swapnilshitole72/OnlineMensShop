package com.shopx.service;

import java.util.List;

import com.shopx.dto.ReviewDTO;
import com.shopx.entities.Review;

public interface ReviewService {

	public Review addNewReview(ReviewDTO review);
	
	public List<Review> getReviewByProductId(Long id);
	
	public Double getAvgProductRatingById(Long id);
	
//	public List<AvgRatingResponseDTO> getAvgProductRatingOfAllProducts();
}
