package com.shopx.service;

import java.util.List;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.shopx.dao.ReviewDao;
import com.shopx.dto.ReviewDTO;
import com.shopx.entities.Product;
import com.shopx.entities.Review;
import com.shopx.entities.User;

@Service
@Transactional
public class ReviewServiceImpl implements ReviewService {

	@Autowired
	private ReviewDao dao;
	
	@Autowired
	private ModelMapper mapper;
	
	@Autowired
	private ProductService productService;
	
	@Autowired
	private CustomerService customerService;
	
	@Override
	public Review addNewReview(ReviewDTO review) {
		
		Review newReview = mapper.map(review, Review.class);
		Product product = productService.getProductById(review.getProduct_id()).orElseThrow();
		User customer = customerService.getCustomerById(review.getCustomer_id());
		newReview.setProduct(product);
		newReview.setCustomer(customer);
		return dao.save(newReview);
	}
	
	@Override
	public List<Review> getReviewByProductId(Long id) {
		Product product = productService.getProductById(id).orElseThrow();
		return dao.findByProduct(product);
	}

	@Override
	public Double getAvgProductRatingById(Long id) {
		Product product = productService.getProductById(id).orElseThrow();
		
		return dao.getAvgRatingOfProductById(product.getId());
	}

//	@Override
//	public List<AvgRatingResponseDTO> getAvgProductRatingOfAllProducts() {
//		return dao.getAvgRatingProductOfAllProducts();
//	}

}
